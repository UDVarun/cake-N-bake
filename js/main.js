const container = document.getElementById("products")
const search = document.getElementById("search")

let currentProducts = products

/* ========================= */
/* RENDER PRODUCTS */
/* ========================= */

function renderProducts(list){

container.innerHTML=""

if(list.length===0){

container.innerHTML="<p>No products found</p>"

return

}

list.forEach((p,i)=>{

let card=document.createElement("div")

card.className="product"

card.innerHTML=`

<img src="${p.image}" alt="${p.name}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addToCart(${i})">Add to Cart</button>

`

container.appendChild(card)

})

}

/* ========================= */
/* SHOW ALL PRODUCTS ON LOAD */
/* ========================= */

renderProducts(products)



/* ========================= */
/* SEARCH */
/* ========================= */

search.addEventListener("keyup",()=>{

let value = search.value.toLowerCase()

let filtered = currentProducts.filter(p =>
p.name.toLowerCase().includes(value)
)

renderProducts(filtered)

})



/* ========================= */
/* FILTER BUTTONS */
/* ========================= */

document.querySelectorAll(".filters button").forEach(btn=>{

btn.addEventListener("click",()=>{

let category = btn.dataset.filter

if(category === "all"){

currentProducts = products

}

else{

currentProducts = products.filter(p => p.category === category)

}

renderProducts(currentProducts)

})

})