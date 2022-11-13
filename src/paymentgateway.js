import navbar from "../components/navbar.js"
console.log(navbar())
document.getElementById("navbarid").innerHTML=navbar()
function myfun(){
  window.location.href="paymentcard.html"
}

document.getElementById("paynowbtn").addEventListener("click",yourfun)

function yourfun(){
  window.location.href="paymentcard.html"
}