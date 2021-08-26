const product = [
    {name: 'laptop', price: 100000},
    {name: 'phone', price: 5000},
    {name: 'watch', price: 300},
    {name: 'tv', price: 12000},
]

const productName = product.map(product => product.name);

console.log(productName);