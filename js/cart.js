let cart=[]
let total=0

function addToCart(i){

cart.push(products[i])

total+=products[i].price

updateCart()

}

function updateCart(){

document.getElementById("cart-count").innerText=cart.length

const list=document.getElementById("cart-items")

list.innerHTML=""

cart.forEach(p=>{

let li=document.createElement("li")

li.innerText=p.name+" ₹"+p.price

list.appendChild(li)

})

document.getElementById("cart-total").innerText=total

}

function toggleCart(){

document.getElementById("cart").classList.toggle("open")

}