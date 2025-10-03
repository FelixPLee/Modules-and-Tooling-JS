//importing module
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