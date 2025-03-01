let item1 = 650
let item2 = 100
let item1Quantity = 3
let item2Quantity = 7
let shipping = 100
let total= (item1*item1Quantity)+(item2*item2Quantity)+shipping
console.log(total)
document.write(` <h1>Shopping Cart</h1> <br> <p>Price of item 1 is ${item1} <br>   
Quantity of item 1 is ${item1Quantity} <br> Price of item 2 is ${item2} <br> Quantity of item 2 is ${item2Quantity} <br>  Shipping charges is ${shipping}</p>
<p>Total cost of your order is ${total}</p>
`)