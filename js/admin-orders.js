const orders = JSON.parse(localStorage.getItem("orders")) || []

const table = document.getElementById("orders-table")

if(table){

orders.forEach((o,i)=>{

let row=document.createElement("tr")

row.innerHTML=`

<td>#${i+1}</td>
<td>₹${o.total}</td>

`

table.appendChild(row)

})

}

/* DASHBOARD STATS */

const tp=document.getElementById("total-products")
const to=document.getElementById("total-orders")
const tr=document.getElementById("total-revenue")

if(tp) tp.innerText = products.length
if(to) to.innerText = orders.length

let revenue=0

orders.forEach(o=> revenue+=o.total)

if(tr) tr.innerText = "₹"+revenue