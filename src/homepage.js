import { navbar } from "../components/navbar.js"
let div_nav = document.getElementById("navbarid")
div_nav.innerHTML = navbar()


let name = localStorage.getItem("Jefit_username");
let showname = document.querySelector("#signup")
showname.textContent = name || "Sign Up";

if (name != null) {
    let login = document.getElementById('dropbtn1');
    login.innerHTML = 'My Jefit';
    // console.log('login', login)
}

let login = document.getElementById('dropbtn1');
login.onclick = () => {
    Login();
}

const Login = () => {
    window.location.href = 'login.html'
}

let signOut = document.getElementById('signOut');
signOut.onclick = () => {
    SignOut();
}

const SignOut = () => {
    // console.log('cheking')
    localStorage.removeItem('Jefit_username')
}
