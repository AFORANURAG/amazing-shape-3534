
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

        return loginData;
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

    let {token} = await user_loginData.Login(Username, Pwd);

    getProfile(Username, token)

}


const getProfile = async (Username, token) =>{

    const login_api = `https://masai-api-mocker.herokuapp.com/user/${Username}`;

    let response = await fetch(login_api, {
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    
    // let api_link = `https://masai-api-mocker.herokuapp.com/user/${Username}`

    // let response = await fetch(api_link, {

    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //     },
    // });

    let profileData = await response.json();

    console.log('profiledata', profileData)

    let showname = document.getElementById('showname');
    showname.innerText = profileData.username;

}


// avtar777
// betterid88