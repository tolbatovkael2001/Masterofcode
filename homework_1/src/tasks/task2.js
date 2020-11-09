const products = require('../Products.json');

function findMaxValue(products) {
   let expensProduct = products[0];
   let lastPrice = products[0].quantity * +products[0].priceForPair.slice(1);
   for (let product of products.slice(1)) {
      let price = product.quantity * +product.priceForPair.slice(1);

      if (price > lastPrice) {
         expensProduct = product;
         lastPrice = price;
      }
   }
   return expensProduct;
}

module.exports = findMaxValue;
