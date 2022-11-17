
export const NftCode: { __type: 'NftCode', protocol: string, code: object[] } = {
    __type: 'NftCode',
    protocol: 'PtEdo2ZkT9oKpimTah6x2embF25oss54njMuPzkJTEi5RqfdZFA',
    code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","annots":["%balance_of"],"args":[{"prim":"list","annots":["%requests"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"contract","annots":["%callback"],"args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","annots":["%request"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"nat","annots":["%balance"]}]}]}]}]},{"prim":"pair","annots":["%buy"],"args":[{"prim":"nat"},{"prim":"address"}]}]},{"prim":"or","args":[{"prim":"pair","annots":["%mint"],"args":[{"prim":"nat"},{"prim":"string"}]},{"prim":"pair","annots":["%sell"],"args":[{"prim":"nat"},{"prim":"nat"}]}]}]},{"prim":"or","args":[{"prim":"list","annots":["%transfer"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"list","annots":["%tx"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"nat","annots":["%amount"]}]}]}]}]},{"prim":"list","annots":["%update_operators"],"args":[{"prim":"or","args":[{"prim":"pair","annots":["%add_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"pair","annots":["%remove_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]}]}]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%administrator"]},{"prim":"map","annots":["%bids"],"args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat","annots":["%price"]},{"prim":"nat","annots":["%quantity"]}]}]}]},{"prim":"big_map","annots":["%ledger"],"args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"big_map","annots":["%operators"],"args":[{"prim":"address"},{"prim":"set","args":[{"prim":"address"}]}]}]},{"prim":"pair","annots":["%token_metadata"],"args":[{"prim":"nat","annots":["%token_id"]},{"prim":"map","annots":["%token_info"],"args":[{"prim":"string"},{"prim":"bytes"}]}]},{"prim":"nat","annots":["%totalSupply"]}]}]},{"prim":"code","args":[[{"prim":"LAMBDA","args":[{"prim":"address"},{"prim":"unit"},[{"prim":"SENDER"},{"prim":"SWAP"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"UNIT"}],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"The sender can only manage operators for his own token"}]},{"prim":"FAILWITH"}]]}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"address"},{"prim":"unit"}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"set","args":[{"prim":"address"}]}]},{"prim":"address"},{"prim":"address"}]}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"set","args":[{"prim":"address"}]}]},[{"prim":"UNPAIR"},{"prim":"SWAP"},{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"SWAP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP","args":[{"int":"3"}]}],[{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"DUP"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"EMPTY_SET","args":[{"prim":"address"}]}],[]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UPDATE"}]]}]]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"APPLY"},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"}]},{"prim":"nat"},[{"prim":"UNPAIR"},{"prim":"SWAP"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},[{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UPDATE"}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},[{"prim":"UNPAIR"},{"prim":"UNPAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"GE"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_INSUFFICIENT_BALANCE"}]},{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"SUB"},{"prim":"ABS"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"EXEC"}]]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"APPLY"},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},[{"prim":"UNPAIR"},{"prim":"UNPAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"ADD"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"EXEC"}]]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"PAIR"},{"prim":"APPLY"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"address"}]},{"prim":"nat"}]},{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"set","args":[{"prim":"address"}]}]}]},{"prim":"pair","args":[{"prim":"nat"},{"prim":"map","args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"address"}]}]},{"prim":"nat"},[{"prim":"UNPAIR"},{"prim":"SWAP"},{"prim":"UNPAIR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"EXEC"}]]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"APPLY"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"UNPAIR"},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DROP"},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DROP"},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"UNPAIR"},{"prim":"MAP","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"SWAP"},{"prim":"PAIR"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP"},{"prim":"SWAP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"TRANSFER_TOKENS"},{"prim":"SWAP"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CONS"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CDR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"}],[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"UNPAIR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"5"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"3"}]},{"prim":"FAILWITH"}],[{"prim":"DUP"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"COMPARE"},{"prim":"GT"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"6"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"4"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"1"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"MUL"},{"prim":"MUL"},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"LT"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"6"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"5"}]},{"prim":"FAILWITH"}],[{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CONTRACT","args":[{"prim":"unit"}]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"6"}]},{"prim":"FAILWITH"}],[]]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"1"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"MUL"},{"prim":"MUL"},{"prim":"UNIT"},{"prim":"TRANSFER_TOKENS"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"SOURCE"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"SUB"},{"prim":"ABS"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CONS"},{"prim":"PAIR"}]]}]]}]]}]]}],[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"UNPAIR"},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"LE"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"3"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"0"}]},{"prim":"FAILWITH"}],[{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"3"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"1"}]},{"prim":"FAILWITH"}],[{"prim":"EMPTY_MAP","args":[{"prim":"string"},{"prim":"bytes"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PACK"},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"thumbnailUri"}]},{"prim":"UPDATE"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"TZIP-12"}]},{"prim":"PACK"},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"interfaces"}]},{"prim":"UPDATE"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"1.0.0"}]},{"prim":"PACK"},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"version"}]},{"prim":"UPDATE"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Wine NFT marketplace to buy and sell wine bottles"}]},{"prim":"PACK"},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"description"}]},{"prim":"UPDATE"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"Wine NFT marketplace"}]},{"prim":"PACK"},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"name"}]},{"prim":"UPDATE"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"EMPTY_BIG_MAP","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"EMPTY_BIG_MAP","args":[{"prim":"address"},{"prim":"set","args":[{"prim":"address"}]}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}]]}],[{"prim":"UNPAIR"},{"prim":"SOURCE"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"GT"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"2"}]},{"prim":"FAILWITH"}],[{"prim":"SELF_ADDRESS"},{"prim":"SOURCE"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"PAIR"},{"prim":"SOURCE"},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}]]}]]}],[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"ITER","args":[[{"prim":"UNPAIR"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"ITER","args":[[{"prim":"UNPAIR"},{"prim":"SENDER"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP"}],[{"prim":"DUP","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"EMPTY_SET","args":[{"prim":"address"}]}],[]]},{"prim":"SWAP"},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OPERATOR"}]},{"prim":"FAILWITH"}]]}]]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"8"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"}]]},{"prim":"SWAP"},{"prim":"DROP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CDR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"}],[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"ITER","args":[[{"prim":"IF_LEFT","args":[[{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"EXEC"}],[{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"2"}]}],[{"prim":"DUP"},{"prim":"DUP","args":[{"int":"8"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"NONE","args":[{"prim":"set","args":[{"prim":"address"}]}]}],[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"SIZE"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP"},{"prim":"NONE","args":[{"prim":"set","args":[{"prim":"address"}]}]}],[{"prim":"SOME"}]]}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UPDATE"}]]}]]}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CDR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"CAR"}]]},{"prim":"PAIR"}]]}]]}]`)
};