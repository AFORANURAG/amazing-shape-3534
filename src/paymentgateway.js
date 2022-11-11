import navbar from "../components/navbar.js"
console.log(navbar())
document.getElementById("navbarid").innerHTML=navbar()
$(function () {
    $('[data-toggle="popover"]').popover()
  })