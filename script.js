//importing module

//experimenting with modules part 1
/*
console.log("importing module")
//import {addToCart, totalPrice as price, totalQuantity as tq} from './shoppingCart.js'
// addToCart('egg', 12)
// console.log(price, tq)

// import * as ShoppingCart from './shoppingCart.js'
// console.log(ShoppingCart.totalPrice)
// ShoppingCart.addToCart('egg', 2)

// //can do it but not good (default and named exports)
// import add, {addToCart, totalPrice as price, totalQuantity as tq} from './shoppingCart.js'
// add('apple', 13)

import add, {cart} from './shoppingCart.js'
add('apple', 13)
add('bread', 4)
add('egg', 3)
add('pizza', 1)

//live connection 
console.log(cart)
//logs all the itens added


//TOP LEVEL await only work in modules

// const res = await fetch("https://jsonplaceholder.typicode.com/posts")
// const data = await res.json()
// console.log(data)

//Block module execution (be careful)
//With grate power comes great responsibility 

const getLastPost = async function() {
const res = await fetch("https://jsonplaceholder.typicode.com/posts")
const data = await res.json()
console.log(data)

return {title: data.at(-1).title, text: data.at(-1).body}
}
//not practical
//const LastPost = getLastPost()
//LastPost.then(last => console.log(last))

const getLast2 = await getLastPost()
console.log(getLast2)
*/

/*
// the module pattern
//closures
// birth place
const shoppingCart2 = (function() {
    const cart = []
    const shippingCoast = 10
    const totalPrice = 237
    const totalQuantity =23

    const addToCart = function(product,quantity) {
        cart.push({product, quantity})
        console.log(`${quantity} ${product} added to cart`)
    }

    const orderStock = function(product,quantity) {
    console.log(`${quantity} ${product} ordered from supplier`)
}

return{
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
}
})()

shoppingCart2.addToCart('banana', 3)
console.log(shoppingCart2.cart)
//can't
console.log(shoppingCart2.shippingCoast)

*/

// // node js
// //exort in commonjs
// export.addToCart = function(product,quantity) {
//         cart.push({product, quantity})
//         console.log(`${quantity} ${product} added to cart`)
//     }

//     const orderStock = function(product,quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`)
// }
// // import
// const {addToCart} = require(`./shoppingCart.js`)