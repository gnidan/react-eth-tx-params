export default [{"kind":"function","class":{"typeClass":"contract","kind":"native","id":"shimmedcompilationNumber(0):4015","typeName":"Wrapper","contractKind":"contract","payable":true},"abi":{"inputs":[{"components":[{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"components":[{"internalType":"bytes4","name":"kind","type":"bytes4"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"internalType":"struct Types.Party","name":"signer","type":"tuple"},{"components":[{"internalType":"bytes4","name":"kind","type":"bytes4"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"internalType":"struct Types.Party","name":"sender","type":"tuple"},{"components":[{"internalType":"bytes4","name":"kind","type":"bytes4"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"internalType":"struct Types.Party","name":"affiliate","type":"tuple"},{"components":[{"internalType":"address","name":"signatory","type":"address"},{"internalType":"address","name":"validator","type":"address"},{"internalType":"bytes1","name":"version","type":"bytes1"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Types.Signature","name":"signature","type":"tuple"}],"internalType":"struct Types.Order","name":"order","type":"tuple"}],"name":"swap","outputs":[],"stateMutability":"payable","type":"function"},"arguments":[{"name":"order","value":{"type":{"typeClass":"struct","kind":"local","id":"shimmedcompilationNumber(0):18","typeName":"Order","definingContractName":"Types","location":"calldata"},"kind":"value","value":[{"name":"nonce","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"1613670935156","rawAsString":"1613670935156"}}},{"name":"expiry","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"1613682674","rawAsString":"1613682674"}}},{"name":"signer","value":{"type":{"typeClass":"struct","kind":"local","id":"shimmedcompilationNumber(0):29","typeName":"Party","definingContractName":"Types","location":"calldata"},"kind":"value","value":[{"name":"kind","value":{"type":{"typeClass":"bytes","kind":"static","length":4,"typeHint":"bytes4"},"kind":"value","value":{"asHex":"0x36372b07","rawAsHex":"0x36372b0700000000000000000000000000000000000000000000000000000000"}}},{"name":"wallet","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0x00000000000080C886232E9b7EBBFb942B5987AA","rawAsHex":"0x00000000000000000000000000000000000080c886232e9b7ebbfb942b5987aa"}}},{"name":"token","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0x27054b13b1B798B345b591a4d22e6562d47eA75a","rawAsHex":"0x00000000000000000000000027054b13b1b798b345b591a4d22e6562d47ea75a"}}},{"name":"amount","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"150000000","rawAsString":"150000000"}}},{"name":"id","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"0","rawAsString":"0"}}}]}},{"name":"sender","value":{"type":{"typeClass":"struct","kind":"local","id":"shimmedcompilationNumber(0):29","typeName":"Party","definingContractName":"Types","location":"calldata"},"kind":"value","value":[{"name":"kind","value":{"type":{"typeClass":"bytes","kind":"static","length":4,"typeHint":"bytes4"},"kind":"value","value":{"asHex":"0x36372b07","rawAsHex":"0x36372b0700000000000000000000000000000000000000000000000000000000"}}},{"name":"wallet","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0x4b203f54429F7D3019C0c4998B88f8f3517f8352","rawAsHex":"0x0000000000000000000000004b203f54429f7d3019c0c4998b88f8f3517f8352"}}},{"name":"token","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","rawAsHex":"0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}}},{"name":"amount","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"2993210527506098688","rawAsString":"2993210527506098688"}}},{"name":"id","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"0","rawAsString":"0"}}}]}},{"name":"affiliate","value":{"type":{"typeClass":"struct","kind":"local","id":"shimmedcompilationNumber(0):29","typeName":"Party","definingContractName":"Types","location":"calldata"},"kind":"value","value":[{"name":"kind","value":{"type":{"typeClass":"bytes","kind":"static","length":4,"typeHint":"bytes4"},"kind":"value","value":{"asHex":"0x36372b07","rawAsHex":"0x36372b0700000000000000000000000000000000000000000000000000000000"}}},{"name":"wallet","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0x0000000000000000000000000000000000000000","rawAsHex":"0x0000000000000000000000000000000000000000000000000000000000000000"}}},{"name":"token","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0x0000000000000000000000000000000000000000","rawAsHex":"0x0000000000000000000000000000000000000000000000000000000000000000"}}},{"name":"amount","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"0","rawAsString":"0"}}},{"name":"id","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"0","rawAsString":"0"}}}]}},{"name":"signature","value":{"type":{"typeClass":"struct","kind":"local","id":"shimmedcompilationNumber(0):42","typeName":"Signature","definingContractName":"Types","location":"calldata"},"kind":"value","value":[{"name":"signatory","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0x00000000008Bb52B2F23008Ba58939fF59a8f3F2","rawAsHex":"0x00000000000000000000000000000000008bb52b2f23008ba58939ff59a8f3f2"}}},{"name":"validator","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0x4572f2554421Bd64Bef1c22c8a81840E8D496BeA","rawAsHex":"0x0000000000000000000000004572f2554421bd64bef1c22c8a81840e8d496bea"}}},{"name":"version","value":{"type":{"typeClass":"bytes","kind":"static","length":1,"typeHint":"bytes1"},"kind":"value","value":{"asHex":"0x01","rawAsHex":"0x0100000000000000000000000000000000000000000000000000000000000000"}}},{"name":"v","value":{"type":{"typeClass":"uint","bits":8,"typeHint":"uint8"},"kind":"value","value":{"asString":"27","rawAsString":"27"}}},{"name":"r","value":{"type":{"typeClass":"bytes","kind":"static","length":32,"typeHint":"bytes32"},"kind":"value","value":{"asHex":"0x5fcb0cc856bd0afc89493be7bb0e751a9b876b0faebe3086697b3c6c78e4efd3","rawAsHex":"0x5fcb0cc856bd0afc89493be7bb0e751a9b876b0faebe3086697b3c6c78e4efd3"}}},{"name":"s","value":{"type":{"typeClass":"bytes","kind":"static","length":32,"typeHint":"bytes32"},"kind":"value","value":{"asHex":"0x370a7eef528987c13555fd264d96b45af3277b555f9f4f4f6ebf9eb62d3fec2f","rawAsHex":"0x370a7eef528987c13555fd264d96b45af3277b555f9f4f4f6ebf9eb62d3fec2f"}}}]}}]}}],"selector":"0x67641c2f","decodingMode":"full","desc":"Airswap tx"},{"kind":"function","class":{"typeClass":"contract","kind":"native","id":"shimmedcompilationNumber(0):1272","typeName":"Moloch","contractKind":"contract","payable":false},"abi":{"inputs":[{"name":"sharesToBurn","type":"uint256"}],"name":"ragequit","outputs":[],"stateMutability":"nonpayable","type":"function"},"arguments":[{"name":"sharesToBurn","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"34","rawAsString":"34"}}}],"selector":"0x8436593f","decodingMode":"full","desc":"MolochDao Rage quit"},{"kind":"message","class":{"typeClass":"contract","kind":"native","id":"shimmedcompilationNumber(0):317","typeName":"UpgradableProxy","contractKind":"contract","payable":true},"abi":{"stateMutability":"payable","type":"fallback"},"data":"0x4faa8a260000000000000000000000001843b97aa4f16b5ed64069c0c956a455b24faacb","decodingMode":"full","desc":"Polygon deposit"},{"kind":"function","class":{"typeClass":"contract","kind":"native","id":"shimmedcompilationNumber(0):1970","typeName":"SwapRouter","contractKind":"contract","payable":true},"abi":{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactInputSingleParams","name":"params","type":"tuple"}],"name":"exactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},"arguments":[{"name":"params","value":{"type":{"typeClass":"struct","kind":"local","id":"shimmedcompilationNumber(0):2860","typeName":"ExactInputSingleParams","definingContractName":"ISwapRouter","location":"calldata"},"kind":"value","value":[{"name":"tokenIn","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","rawAsHex":"0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}}},{"name":"tokenOut","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F","rawAsHex":"0x000000000000000000000000de30da39c46104798bb5aa3fe8b9e0e1f348163f"}}},{"name":"fee","value":{"type":{"typeClass":"uint","bits":24,"typeHint":"uint24"},"kind":"value","value":{"asString":"3000","rawAsString":"3000"}}},{"name":"recipient","value":{"type":{"typeClass":"address","kind":"general","typeHint":"address"},"kind":"value","value":{"asAddress":"0xEB0d7e41840066F834eeAd0A22242E2A3A0c8108","rawAsHex":"0x000000000000000000000000eb0d7e41840066f834eead0a22242e2a3a0c8108"}}},{"name":"deadline","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"1623295758","rawAsString":"1623295758"}}},{"name":"amountIn","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"947761864335456327","rawAsString":"947761864335456327"}}},{"name":"amountOutMinimum","value":{"type":{"typeClass":"uint","bits":256,"typeHint":"uint256"},"kind":"value","value":{"asString":"247249836670459470768","rawAsString":"247249836670459470768"}}},{"name":"sqrtPriceLimitX96","value":{"type":{"typeClass":"uint","bits":160,"typeHint":"uint160"},"kind":"value","value":{"asString":"0","rawAsString":"0"}}}]}}],"selector":"0x414bf389","decodingMode":"full","desc":"Uniswap v3 swap"}]