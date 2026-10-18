const product ={
    title :"Ball Pen",
    rating:4,
    price :270,
    discount :5,
    isDeal : true,
}
console.log(product.title);
console.log(product["rating"]);
console.log(product.price);
console.log(product["discount"]);
console.log(product.isDeal);


console.log(typeof product.title);
console.log(typeof product["rating"]);
console.log(typeof product.price);
console.log(typeof product["discount"]);
console.log(typeof product.isDeal);

product.price = 300;

console.log(product.price);
product.brand ="brand";
console.log(product.brand);

let product2={
    name :"wafae"
}
console.log(product2.name);

product = product2;