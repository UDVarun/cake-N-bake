let adminProducts = JSON.parse(localStorage.getItem("products")) || products

function saveProducts(){
localStorage.setItem("products", JSON.stringify(adminProducts))
}

function renderAdminProducts(){

const table = document.getElementById("admin-products")

table.innerHTML=""

adminProducts.forEach((p,i)=>{

let row=document.createElement("tr")

row.innerHTML=`

<td>${p.name}</td>
<td>₹${p.price}</td>
<td>${p.category}</td>

<td>

<button onclick="deleteProduct(${i})">Delete</button>

</td>

`

table.appendChild(row)

})

}

function addProduct(){

const name=document.getElementById("name").value
const price=document.getElementById("price").value
const image=document.getElementById("image").value
const category=document.getElementById("category").value

adminProducts.push({
name:name,
price:Number(price),
image:image,
category:category
})

saveProducts()

renderAdminProducts()

}

function deleteProduct(i){

adminProducts.splice(i,1)

saveProducts()

renderAdminProducts()

}

renderAdminProducts()