
class User {
    constructor() {

    }

    async Login(u, p) {

        this.username = u
        this.password = p;


        const login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;

        let response = await fetch(login_api, {
            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const loginData = await response.json();
        console.log('logdata', loginData)

        if (loginData.error === true) {
            alert('please enter valid username and password')
        }
        else {
            alert('Login success  you are redirecting to home page')
            return loginData;
        }
    }
}

let user_loginData = new User();

let login = document.getElementById('Login');
login.onclick = () => {
    Login()
}

const Login = async () => {

    let Pwd = document.getElementById('password').value;
    let Username = document.getElementById('username').value;

    if (Username == "") {
        alert('please enter your username')
    }
    else if (Pwd == "") {
        alert('enter your password')
    }

    else {
        let { token } = await user_loginData.Login(Username, Pwd);
        // localStorage.setItem("Jefit_username", Username);
        getProfile(Username, token)
    }

}

const getProfile = async (Username, token) => {

    const login_api = `https://masai-api-mocker.herokuapp.com/user/${Username}`;

    let response = await fetch(login_api, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    let profileData = await response.json();

    console.log('profiledata', profileData)

    if (profileData.username !== undefined) {
        localStorage.setItem("Jefit_username", Username);
        window.location.href = "./navbar.html";

        // let showname = document.getElementById('showname');
        // showname.innerText = profileData.username;
        // showname.style.color = "red"
    }

}

// registered ids

// avtar777
// betterid88
// charlesrrr456
// menonop789
// merisanam145
// kalasnikavo2022
// gcgsdjgsdj123