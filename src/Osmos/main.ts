import {osmosis,FEES,} from 'osmojs';
import {coin} from '@cosmjs/amino';
import { Dec,IntPretty} from '@keplr-wallet/unit'
import { StargateClient,StargateClientOptions ,} from "@cosmjs/stargate";
//Composing Messages
const {
    joinPool,
    exitPool,
    exitSwapExternAmountOut,
    exitSwapShareAmountIn,
    joinSwapExternAmountIn,
    joinSwapShareAmountOut,
    swapExactAmountIn,
    swapExactAmountOut
} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;;
let amount = 4;
let denom = 'uixo';
//Constructing messages
// const msgs  =  swapExactAmountIn({
//     sender:"",
//     // routes:"j",
//     tokenIn:coin(amount,denom),
//     tokenOutMinAmount:""
// });

//calculating fees
const fee = FEES.osmosis.swapExactAmountIn('low');
const fees = FEES.osmosis.swapExactAmountIn('medium');
const feees = FEES.osmosis.swapExactAmountIn('high');

// construct manual

//if you are broadcasting multiple messages in a batch 
// const gasEstimated = await StargateClient.simulate(address,msgs,memo);

const  flee = {
    amount:coin(0,'uosmo'),
    gas:new IntPretty(new Dec(12).mul(new Dec(1.3)))
    .maxDecimals(0)
    .locale(false)
    .toString()
};

// Initializing the Stargate client


            //Creating Signers 
