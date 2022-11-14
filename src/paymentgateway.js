import {navbar} from "../components/navbar.js"
console.log(navbar())
document.getElementById("navbarid").innerHTML=navbar()
function myfun(){
  window.location.href="https://buy.stripe.com/test_6oE1614ttgOcfVC5kl"
}

document.getElementById("paynowbtn").addEventListener("click",yourfun)

function yourfun(){
  window.location.href="https://buy.stripe.com/test_eVa9Cx1hh8hG5gYcMO"
}
document.getElementById("ourlogo").addEventListener("click",function(){
  window.location.href="homepage.html"
})