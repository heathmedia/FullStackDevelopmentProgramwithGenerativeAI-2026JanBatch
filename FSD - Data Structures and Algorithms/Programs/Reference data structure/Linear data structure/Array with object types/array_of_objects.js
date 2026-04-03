let product1 = {pid: 101, pname: "Mobile", price: 15000, qty: 1,stock: 10};
let product2 = {pid: 102, pname: "Laptop", price: 45000, qty: 1,stock: 5};
let product3 = {pid: 103, pname: "Tablet", price: 25000, qty: 1,stock: 8};
let product4 = {pid: 104, pname: "Headphones", price: 5000, qty: 1,stock: 15};
let product5 = {pid: 105, pname: "Smartwatch", price: 10000, qty: 1,stock: 12};
let product6 = {pid: 106, pname: "Camera", price: 30000, qty: 1,stock: 7};
let product7 = {pid: 107, pname: "Printer", price: 20000, qty: 1,stock: 4};
let product8 = {pid: 108, pname: "Monitor", price: 12000, qty: 1,stock: 6};
let product9 = {pid: 109, pname: "Keyboard", price: 2000, qty: 1,stock: 20};
let product10 = {pid: 110, pname: "Mouse", price: 1500, qty: 1,stock: 25};
console.log("Display one product details");
console.log(product1);
console.log("Pid "+product1.pid);
console.log("Pname "+product1.pname);
console.log("Price "+product1.price);
console.log("Qty "+product1.qty);
console.log("Stock "+product1.stock);
// store all products in array 
let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
console.log("Number of products "+products.length);
console.log("Display all product one by one one using forEach function");
products.forEach(product => {
    console.log("Pid "+product.pid);
    console.log("Pname "+product.pname);
    console.log("Price "+product.price);
    console.log("Qty "+product.qty);
    console.log("Stock "+product.stock);
    console.log("=====================================");
});
// filter the product with conditions. 
let filteredProducts = products.filter(product => product.price > 20000);
console.log("Number of products with price greater than 20000 = "+filteredProducts.length);
// filter the product with stock less than 10.
let lowStockProducts = products.filter(product => product.stock < 10);
console.log("Number of products with stock less than 10 = "+lowStockProducts.length);
// search the product with pid 1005.
let searchProduct = products.find(product => product.pid === 1005);
if(searchProduct){
    console.log("Product with pid 1005 found:");
    console.log("Pid "+searchProduct.pid);
    console.log("Pname "+searchProduct.pname);
    console.log("Price "+searchProduct.price);
    console.log("Qty "+searchProduct.qty);
    console.log("Stock "+searchProduct.stock);
}else{
    console.log("Product with pid 1005 not found.");
}
// provide discount of 10% on all products with price greater than 15000.
let discountedProducts = products.map(product => {
    if(product.price > 15000){
        product.price = product.price - (product.price * 0.1);
    }
    return product;
});
console.log("Products with discounted prices:");
discountedProducts.forEach(product => {
    console.log("Pid "+product.pid);
    console.log("Pname "+product.pname);
    console.log("Price "+product.price);
    console.log("Qty "+product.qty);
    console.log("Stock "+product.stock);
    console.log("=====================================");
});
// find all product total price (price * qty).
let totalPriceProducts = products.map(product => {
    return {
        pid: product.pid,
        pname: product.pname,
        totalPrice: product.price * product.qty
    };
});
console.log("Products with total price:");
totalPriceProducts.forEach(product => {
    console.log("Pid "+product.pid);
    console.log("Pname "+product.pname);
    console.log("Total Price "+product.totalPrice);
    console.log("=====================================");
});