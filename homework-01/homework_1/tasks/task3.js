function modifyProducts(products) {
   for (let i = 0; i < products.length; i++) {
      if (i + 1 === products.length) break;

      product = products[i];
      const curProd = Object.entries(product);
      const nextProd = Object.entries(products[i + 1]);

      curProd.forEach((item, index) => {
         if (nextProd[index] == undefined || item[0] !== nextProd[index][0]) {
            nextProd.splice(index, 0, [item[0], 0]);
         }
      });
      products[i + 1] = Object.fromEntries(nextProd);
   }
   return products;
}

module.exports = modifyProducts;
