import {} from './chair-factory'
// let USER =Creator.createObject("a");
// console.log(USER);











// // ... your code goes here and it should take the denoms and amounts and turn them into coin object and sum the amounts with the same denom ...
// type COIN = {
//     denom: string,
//     amount: number
//   }
  
//     const inputObj = {
//         denom:["uixo","uixo","uixo","uixo"],
//         amount: ["1200000","1200000","1200000"]
//   };
//   let denom = 1200000
//   function generateCoins(denoms: string[], amounts: string[]): COIN[] {
//     const coinMap: Record<string, number> = {};
//     // Create a map of denominations and their total amounts
//     for (let i = 0; i < denoms.length; i++) {
//       const denom = denoms[i];
//       const amount = parseInt(amounts[i]);
//       if (coinMap[denom]) {
//         coinMap[denom] += amount;
//       } else {
//         coinMap[denom] = amount;
//       }
//     }
//     // Convert the map into an array of coin objects
//     const coins: COIN[] = [];
//     for (const [denom, amount] of Object.entries(coinMap)) {
//       coins.push({ denom, amount });
//       console.log(coins);
      
//     }
//     return coins;
//   }
// generateCoins(inputObj.denom,inputObj.amount);
 
 