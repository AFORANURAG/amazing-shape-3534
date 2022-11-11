

class User {
    constructor() {

    }

    validateUsername(username) {
        if (username.includes('@' || '#' || '$')) {
            return false
        }
        else {
            return true
        }
    }

    validatePassword(password) {
        let cpwd = document.getElementById('confirm_password').value;
        if (cpwd != password) {
            alert('password not matching')
            return false
        }
        // let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        else if (password.length < 7) {
            alert('Minimum 8 characters needed')
            return false
        }

        // else if (!pwd_expression.test(password)) {
        //     // alert ('Upper case, Lower case, Special character and Numeric letter are required in Password');
        //     return false
        // }
        // else if (cpwd != password) {
        //     return false
        // }

        else {
            return true
        }
    }

    async signUp(name, username, email, password, mobile, description) {

        let isValidated = this.validateUsername(username) && this.validatePassword(password)

        if (isValidated) {

            this.name = name
            this.username = username;
            this.email = email;
            this.password = password;
            this.mobile = mobile
            this.description = description;

            const register_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

            let response = await fetch(register_api, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let data = await response.json();
            console.log('data', data)

            if (data.error === true) {
                alert('user already exists')
            }
            else {
                alert('Sign up successful you are redirecting to home page')

                window.location.href = 'navbar.html'
                let signup = document.getElementById('signup')
                signup.style.display = "none"
            }
        }
    }

}


let user_data = new User();



let register = document.getElementById('CREATE_ACCOUNT');
register.onclick = () => {
    Register()
}


const Register = () => {


    let signUp_form = document.getElementById('signUp_form');

    const name = `Antony`;
    const email = signUp_form.email.value;
    const username = signUp_form.username.value;
    const password = signUp_form.password.value;
    const mobile = `${email}78978787878`;
    const description = `${email}doneee`;


    user_data.signUp(name, email, username, password, mobile, description);
    console.log('userData', user_data)
}