function sortProducts(products, key, value) {
   return products.filter((product) => product[key] === value);
}

module.exports = sortProducts;
