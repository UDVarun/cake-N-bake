const adminUser = "admin"
const adminPass = "1234"

function login(){

const u = document.getElementById("username").value
const p = document.getElementById("password").value

if(u===adminUser && p===adminPass){

localStorage.setItem("admin","true")

window.location.href="dashboard.html"

}else{

document.getElementById("login-msg").innerText="Invalid login"

}

}