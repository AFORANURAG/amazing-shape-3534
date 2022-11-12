import navbar from "./navbar.js"
console.log(navbar())
document.getElementById("navbarid").innerHTML=navbar()
// $(function () {
//     $('[data-toggle="popover"]').popover()
//   })
document.getElementById("paynowbtn").addEventListener("click",()=>{
fetch('/create-checkout-session' ,{

method:'POST',
headers:{
'Content-Type':'application/json()'
},
body:JSON.stringify({
    items:[
{
   id:1,quantity:2 
},{id:2,quantity:3}

    ]
})
}).then(res=>{
    if(res.ok) return res.json()
    return res.json().then(json=>Promise.reject(json))
}).then(({url})=>{
console.log(url)
    // window.location=url

} ).catch(e=>{
    console.log(e.error)
})
})
  



