(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[3],{1194:function(e,t){e.exports={1:{contracts:{DAI:{address:"0x6B175474E89094C44Da98b954EedeAC495271d0F",abi:[{inputs:[{internalType:"uint256",name:"chainId_",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"src",type:"address"},{indexed:!0,internalType:"address",name:"guy",type:"address"},{indexed:!1,internalType:"uint256",name:"wad",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"src",type:"address"},{indexed:!0,internalType:"address",name:"dst",type:"address"},{indexed:!1,internalType:"uint256",name:"wad",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"burn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"guy",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"mint",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"src",type:"address"},{internalType:"address",name:"dst",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"move",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"holder",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"nonce",type:"uint256"},{internalType:"uint256",name:"expiry",type:"uint256"},{internalType:"bool",name:"allowed",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"pull",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"push",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"guy",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"dst",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"src",type:"address"},{internalType:"address",name:"dst",type:"address"},{internalType:"uint256",name:"wad",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},UNI:{address:"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",abi:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}]}}}}}}]);
//# sourceMappingURL=3.f7e89aae.chunk.js.map