let adminProducts = JSON.parse(localStorage.getItem("products")) || products

let editIndex = null

function saveProducts(){

localStorage.setItem("products", JSON.stringify(adminProducts))

}

/* RENDER */

function renderAdminProducts(){

const table=document.getElementById("admin-products")

table.innerHTML=""

adminProducts.forEach((p,i)=>{

let row=document.createElement("tr")

row.innerHTML=`

<td><img src="${p.image}" class="admin-product-img"></td>

<td>${p.name}</td>

<td>₹${p.price}</td>

<td>${p.category}</td>

<td>

<button class="edit-btn" onclick="editProduct(${i})">Edit</button>

<button class="delete-btn" onclick="deleteProduct(${i})">Delete</button>

</td>

`

table.appendChild(row)

})

updateStats()

}

/* ADD */

function addProduct(){

const name=document.getElementById("name").value
const price=document.getElementById("price").value
const image=document.getElementById("image").value
const category=document.getElementById("category").value

adminProducts.push({

name,
price:Number(price),
image,
category

})

saveProducts()

renderAdminProducts()

clearForm()

}

/* DELETE */

function deleteProduct(i){

adminProducts.splice(i,1)

saveProducts()

renderAdminProducts()

}

/* EDIT */

function editProduct(i){

editIndex=i

const p=adminProducts[i]

document.getElementById("name").value=p.name
document.getElementById("price").value=p.price
document.getElementById("image").value=p.image
document.getElementById("category").value=p.category

document.getElementById("update-btn").style.display="inline-block"

previewImage()

}

/* UPDATE */

function updateProduct(){

adminProducts[editIndex]={

name:document.getElementById("name").value,
price:Number(document.getElementById("price").value),
image:document.getElementById("image").value,
category:document.getElementById("category").value

}

saveProducts()

renderAdminProducts()

clearForm()

document.getElementById("update-btn").style.display="none"

}

/* IMAGE PREVIEW */

function previewImage(){

const url=document.getElementById("image").value

document.getElementById("preview").src=url

}

/* STATS */

function updateStats(){

document.getElementById("total-products").innerText=adminProducts.length

}

/* CLEAR */

function clearForm(){

document.getElementById("name").value=""
document.getElementById("price").value=""
document.getElementById("image").value=""
document.getElementById("category").value=""

document.getElementById("preview").src=""

}

renderAdminProducts()