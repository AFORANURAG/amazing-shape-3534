let loginbtn = document.getElementById("signUp_form").addEventListener("submit",handleSignup);

function handleSignup(e){
    e.preventDefault()
let form = document.getElementById("signUp_form");
let name=form.name.value;
let email=form.email.value;
let password=document.getElementById("password").value; 
let obj = {name,email,password};
console.log(name,email,password)
fetch("https://rich-erin-hippo-tie.cyclic.app/userauth/signup",{
 method:"POST",   
body:JSON.stringify(obj),
headers:{
   "Content-Type": "application/json",
}    
}).then((data)=>data.json()).then((res)=>{console.log(res.status)
window.location.href = "./login.html" ;
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