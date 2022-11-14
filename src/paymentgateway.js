import {navbar} from "../components/navbar.js"
console.log(navbar())
document.getElementById("navbarid").innerHTML=navbar()
function myfun(){
  window.location.href="https://buy.stripe.com/test_6oE1614ttgOcfVC5kl"
}

document.getElementById("paynowbtn").addEventListener("click",yourfun)

function yourfun(){
  window.location.href="https://buy.stripe.com/test_3cs01X5xx0Pe24MfZ1"
}
document.getElementById("ourlogo").addEventListener("click",function(){
  window.location.href="homepage.html"
})