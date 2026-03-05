const ctx=document.getElementById("salesChart")

const chart=new Chart(ctx,{

type:"bar",

data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Sales",

data:[120,190,300,500,200,300,450],

backgroundColor:"#ff5c7c"

}]

},

options:{
responsive:true
}

})