let loginbtn = document.getElementById("Login").addEventListener("click",handleLogin);

function handleLogin(){
let name=document.getElementById("username").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let obj = {name,email,password};
console.log(obj);
fetch("https://rich-erin-hippo-tie.cyclic.app/userauth/login",{
method:"POST" , 
body:JSON.stringify(obj), 
  headers:{
    "Content-Type":"application/json"
  }
}).then((data)=>data.json()).then((res)=>{
localStorage.setItem("Jefit_username", res.document.name);
console.log(res)
window.location.href = "index.html";    
}).catch((err)=>console.log(err));
}

// registered ids

// avtar777
// betterid88
// charlesrrr456
// menonop789
// merisanam145
// kalasnikavo2022
// gcgsdjgsdj123