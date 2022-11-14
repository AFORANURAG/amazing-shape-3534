import  {navbar}  from "../components/navbar.js";
document.getElementById("navbarid").innerHTML=navbar()
// we append nodes basically and elements and ids , those are html , so they are not working good
document.getElementById("ourlogo").addEventListener("click",function(){
    window.location.href="homepage.html"
  })