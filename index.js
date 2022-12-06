const ProductManager = require ('./entrega2')

const manager = new ProductManager ('products.json');

(async()=>{
    await manager.addProduct ({
        name: 'Producto1',
        price: 150
})

console.log(await manager.getProducts());

await manager.updateProduct (2, {
    name: 'Producto 2',
    price: 300
})

console.log(await manager.getProducts());


})()