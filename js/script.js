const products=[

{name:"Carrot Cake",price:7,image:"css/img/cake-1.jpeg",category:"cake"},
{name:"Chocolate Cake",price:9,image:"css/img/cake-2.jpeg",category:"cake"},
{name:"Rose Cake",price:8,image:"css/img/cake-3.jpeg",category:"cake"},

{name:"Vanilla Cupcake",price:5,image:"css/img/cupcake-1.jpeg",category:"cupcake"},
{name:"Chocolate Cupcake",price:6,image:"css/img/cupcake-2.jpeg",category:"cupcake"},

{name:"Chocolate Doughnut",price:4,image:"css/img/doughnut-1.jpeg",category:"doughnut"},
{name:"Sprinkle Doughnut",price:4.5,image:"css/img/doughnut-2.jpeg",category:"doughnut"},

{name:"Macaroons",price:3,image:"css/img/sweets-1.jpeg",category:"sweet"}

]

const container=document.getElementById("products")
const search=document.getElementById("search")

function renderProducts(list){

container.innerHTML=""

list.forEach((p,i)=>{

let card=document.createElement("div")

card.className="product"

card.innerHTML=`

<img src="${p.image}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${i})">Add to Cart</button>

`

container.appendChild(card)

})

}

renderProducts(products)

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase()

renderProducts(products.filter(p=>p.name.toLowerCase().includes(value)))

})

document.querySelectorAll(".filters button").forEach(btn=>{

btn.addEventListener("click",()=>{

let category=btn.dataset.filter

if(category==="all") renderProducts(products)
else renderProducts(products.filter(p=>p.category===category))

})

})