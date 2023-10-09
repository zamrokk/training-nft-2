#import "../common/assertions.jsligo" "Assertions"

#import "../common/errors.mligo" "Errors"

#import "../common/tzip12.datatypes.jsligo" "TZIP12"

#import "../common/tzip12.interfaces.jsligo" "TZIP12Interface"

#import "../common/tzip16.datatypes.jsligo" "TZIP16"


module Datatypes  = struct
 type ledger = ((address * nat), nat) big_map
   type operator = address
   type operators = ((address * operator), nat set) big_map
   type storage =  {
      ledger : ledger;
      operators : operators;
      token_metadata : TZIP12.tokenMetadata;
      metadata : TZIP16.metadata;
   }
end

module Sidecar  = struct

// Operators 

   let assert_authorisation (operators : Datatypes.operators) (from_ : address) (token_id : nat) : unit =
      let sender_ = (Tezos.get_sender ()) in
      if (sender_ = from_) then ()
      else
      let authorized = match Big_map.find_opt (from_,sender_) operators with
         Some (a) -> a | None -> Set.empty
      in if Set.mem token_id authorized then ()
      else failwith Errors.not_operator


 

   let add_operator (operators : Datatypes.operators) (owner : address) (operator : Datatypes.operator) (token_id : nat) : Datatypes.operators =
      if owner = operator then operators (* assert_authorisation always allow the owner so this case is not relevant *)
      else
         let () = Assertions.assert_update_permission owner in
         let auth_tokens = match Big_map.find_opt (owner,operator) operators with
            Some (ts) -> ts | None -> Set.empty in
         let auth_tokens  = Set.add token_id auth_tokens in
         Big_map.update (owner,operator) (Some auth_tokens) operators

   let remove_operator (operators : Datatypes.operators) (owner : address) (operator : Datatypes.operator) (token_id : nat) : Datatypes.operators =
      if owner = operator then operators (* assert_authorisation always allow the owner so this case is not relevant *)
      else
         let () = Assertions.assert_update_permission owner in
         let auth_tokens = match Big_map.find_opt (owner,operator) operators with
         None -> None | Some (ts) ->
            let ts = Set.remove token_id ts in
            if (Set.size ts = 0n) then None else Some (ts)
         in
         Big_map.update (owner,operator) auth_tokens operators


// Ledger 
   
    

   let get_for_user (ledger:Datatypes.ledger) (owner: address) (token_id : nat) : nat =
      match Big_map.find_opt (owner,token_id) ledger with Some (a) -> a | None -> 0n


   let set_for_user (ledger:Datatypes.ledger) (owner: address) (token_id : nat ) (amount_:nat) : Datatypes.ledger =
      Big_map.update (owner,token_id) (Some amount_) ledger

   let decrease_token_amount_for_user (ledger : Datatypes.ledger) (from_ : address) (token_id : nat) (amount_ : nat) : Datatypes.ledger =
      let balance_ = get_for_user ledger from_ token_id in
      let ()       = assert_with_error (balance_ >= amount_) Errors.ins_balance in
      let balance_ = abs (balance_ - amount_) in
      let ledger   = set_for_user ledger from_ token_id balance_ in
      ledger

   let increase_token_amount_for_user (ledger : Datatypes.ledger) (to_   : address) (token_id : nat) (amount_ : nat) : Datatypes.ledger =
      let balance_ = get_for_user ledger to_ token_id in
      let balance_ = balance_ + amount_ in
      let ledger   = set_for_user ledger to_ token_id balance_ in
      ledger



// Storage 
   

   let assert_token_exist (s:Datatypes.storage) (token_id : nat) : unit  =
      let _ = Option.unopt_with_error (Big_map.find_opt token_id s.token_metadata)
         Errors.undefined_token in
      ()

   let set_ledger (s:Datatypes.storage) (ledger:Datatypes.ledger) = {s with ledger = ledger}

   let get_operators (s:Datatypes.storage) = s.operators
   let set_operators (s:Datatypes.storage) (operators:Datatypes.operators) = {s with operators = operators}

end


module MultiAsset  = struct
   type ledger = Datatypes.ledger
   type operators = Datatypes.operators
   type storage =  Datatypes.storage
   type ret = operation list * storage



[@entry] let transfer (t : TZIP12.transfer) (s : storage) : operation list * storage =
   (* This function process the "txs" list. Since all transfer share the same "from_" address, we use a se *)
   let process_atomic_transfer (from_:address) (ledger, t:ledger * TZIP12.atomic_trans) =
      let {to_;token_id;amount=amount_} = t in
      let ()     = Sidecar.assert_token_exist s token_id in
      let ()     = Sidecar.assert_authorisation s.operators from_ token_id in
      let ledger = Sidecar.decrease_token_amount_for_user ledger from_ token_id amount_ in
      let ledger = Sidecar.increase_token_amount_for_user ledger to_   token_id amount_ in
      ledger
   in
   let process_single_transfer (ledger, t:ledger * TZIP12.transfer_from) =
      let {from_;txs} = t in
      let ledger     = List.fold_left (process_atomic_transfer from_) ledger txs in
      ledger
   in
   let ledger = List.fold_left process_single_transfer s.ledger t in
   ([]: operation list),Sidecar.set_ledger s ledger

[@entry] let balance_of (b : TZIP12.balance_of) (s : storage) : operation list * storage =
   let {requests;callback} = b in
   let get_balance_info (request : TZIP12.request) : TZIP12.callback =
      let {owner;token_id} = request in
      let ()          = Sidecar.assert_token_exist  s token_id in
      let balance_    = Sidecar.get_for_user s.ledger owner token_id in
      {request=request;balance=balance_}
   in
   let callback_param = List.map get_balance_info requests in
   let operation = Tezos.transaction (Main callback_param) 0tez callback in
   ([operation]: operation list),s



[@entry] let update_operators (updates: TZIP12.update_operators) (s : storage) : operation list * storage =
   let update_operator (operators,update : operators * TZIP12.unit_update) = match update with
      Add_operator    {owner=owner;operator=operator;token_id=token_id} -> Sidecar.add_operator    operators owner operator token_id
   |  Remove_operator {owner=owner;operator=operator;token_id=token_id} -> Sidecar.remove_operator operators owner operator token_id
   in
   let operators = Sidecar.get_operators s in
   let operators = List.fold_left update_operator operators updates in
   let s = Sidecar.set_operators s operators in
   ([]: operation list),s


  [@view]
  let get_balance (p: (address * nat)) (s: storage) : nat =  
  
  let (owner , token_id) = p in
  let () = Sidecar.assert_token_exist s token_id in
  match Big_map.find_opt (owner , token_id) s.ledger with None -> 0n | Some(n) -> n
      
  [@view]
  let total_supply (_token_id: nat) (_s: storage) : nat =  failwith Errors.not_available
  [@view]
  let all_tokens (_: unit) (_s: storage) : nat set = failwith Errors.not_available
  [@view]
  let is_operator (op: TZIP12.operator) (s: storage) : bool = 

   let authorized = match Big_map.find_opt (op.owner, op.operator) s.operators with
            Some(opSet) -> opSet
            | None -> Set.empty in
    Set.size authorized > 0n || op.owner = op.operator

 [@view]
  let token_metadata (p: nat) (s: storage) : TZIP12.tokenMetadataData = 
      match Big_map.find_opt p s.token_metadata with
         Some(data) ->    data
         | None() -> failwith Errors.undefined_token
   end


   module DUMMY : TZIP12Interface.FA2 = MultiAsset