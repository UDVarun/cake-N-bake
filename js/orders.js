let orders = JSON.parse(localStorage.getItem("orders")) || []

const table = document.getElementById("orders-table")

function renderOrders(){

table.innerHTML=""

orders.forEach(o=>{

let row=document.createElement("tr")

row.innerHTML=`

<td>#${o.id}</td>
<td>${o.customer}</td>
<td>₹${o.total}</td>
<td>${o.status}</td>

`

table.appendChild(row)

})

}

renderOrders()