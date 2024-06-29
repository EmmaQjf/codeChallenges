function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;
   for (let i = 0; i < keyboards.length; i++) {
       for (let j = 0; j < drives.length; j++) {
           let price= keyboards[i] + drives[j];

           if (price <= b &&  price > maxSpent) {
               maxSpent = price;
           }
       }
   }


   return maxSpent;

}