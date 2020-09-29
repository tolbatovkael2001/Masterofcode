const cherry = JSON.[
    { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
    { type: 'socks', color: 'green', quantity: 5, priceForPair: '$10' },
    { type: 'socks', color: 'blue', quantity: 8, priceForPair: '$6' },
    { type: 'hat', color: 'red', quantity: 7, priceForPair: '$5' },
    { type: 'hat', color: 'green', quantity: 0, priceForPair: '$6' },
    { type: 'socks', color: 'blue', priceForPair: '$6' },
    { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
    { type: 'socks', color: 'white', quantity: 3, priceForPair: '$4' },
    { type: 'socks', color: 'green', priceForPair: '$10' },
    { type: 'socks', color: 'blue', quantity: 2, priceForPair: '$6' },
    { type: 'hat', color: 'green', quantity: 3, priceForPair: '$5' },
    { type: 'hat', color: 'red', quantity: 1, priceForPair: '$6' },
    { type: 'socks', color: 'blue', priceForPair: '$6' },
];

    function countPrice(arr) {
        const goods = JSON.parse(array);
        let allSum = 0;
        let allQuantityOfSocks = 0;
        let allQuantityOfRedHats = 0;
        let colorCost = {};
        let allColorCost = '';

    goods.forEach((item) => {
        let itemPrice =+item.priceForPair.slice(1);
        allSum += itemPrice;
        item.quantity
            ? (allQuantityOfSocks +=0)
        if (item.color === 'red' && item.type === 'hat') {
            allQuantityOfRedHats +=item.quantity;
        }
        
        colorCost[item.color]
            ? (colorCost[item.color] += itemPrice)
            : (colorCost[item.color] = itemPrice);
    });

    for (let color in colorCost){
        allColorCost += `${color} - ${colorCost[color]}`
    }

    console.log(`Socks - ${allQuantityOfSocks}`)
    console.log(`Red Hats - ${allQuantityOfRedHats}`)
    console.log(allColorCost);
    console.log(`Total price of all goods is ${allSum}`);
}

countPrice(cherry);