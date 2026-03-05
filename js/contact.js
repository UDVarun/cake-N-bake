const form=document.getElementById("contact-form")
const message=document.getElementById("form-message")

form.addEventListener("submit",function(e){

e.preventDefault()

message.innerText="✅ Message sent successfully!"

form.reset()

})