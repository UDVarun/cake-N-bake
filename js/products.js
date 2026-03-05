let defaultProducts = [

/* CAKES */

{
name:"Red Velvet Cake",
price:8,
image:"css/img/cake-1.jpeg",
category:"cake"
},

{
name:"Chocolate Truffle Cake",
price:9,
image:"css/img/cake-2.jpeg",
category:"cake"
},

{
name:"Strawberry Rose Cake",
price:10,
image:"css/img/cake-3.jpeg",
category:"cake"
},


/* CUPCAKES */

{
name:"Vanilla Cream Cupcake",
price:5,
image:"css/img/cupcake-1.jpeg",
category:"cupcake"
},

{
name:"Chocolate Fudge Cupcake",
price:6,
image:"css/img/cupcake-2.jpeg",
category:"cupcake"
},

{
name:"Blueberry Delight Cupcake",
price:6.5,
image:"css/img/cupcake-3.jpeg",
category:"cupcake"
},


/* DOUGHNUTS */

{
name:"Chocolate Glazed Doughnut",
price:4,
image:"css/img/doughnut-1.jpeg",
category:"doughnut"
},

{
name:"Sprinkle Party Doughnut",
price:4.5,
image:"css/img/doughnut-2.jpeg",
category:"doughnut"
},

{
name:"Caramel Filled Doughnut",
price:5,
image:"css/img/doughnut-3.jpeg",
category:"doughnut"
},


/* SWEETS */

{
name:"French Macarons",
price:3,
image:"css/img/sweets-1.jpeg",
category:"sweet"
},

{
name:"Chocolate Raspberry Delight",
price:4,
image:"css/img/sweets-2.jpeg",
category:"sweet"
},

{
name:"Berry Cream Pastry",
price:4.5,
image:"css/img/sweets-3.jpeg",
category:"sweet"
}

]

/* LOAD FROM ADMIN PANEL OR DEFAULT */

const products = JSON.parse(localStorage.getItem("products")) || defaultProducts