const { sortP: sortProducts, findMax: findMaxValue, modifyProducts } = require('./tasks');
const products = require('./Products.json');

function boot(products, key, value) {
   const sortedProducts = sortP(products, key, value);
   console.log('Sort:', sortedProducts);
   const modProd = modifyProducts(sortedProducts);
   console.log('Mod:', modProd);
   console.log(findMax(modProd));
}

boot(products, 'type', 'socks');
