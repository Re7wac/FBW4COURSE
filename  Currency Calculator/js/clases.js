//Varibles

const registerSwich = document.getElementById('registerSwich');
const signInSwich = document.getElementById('signInSwich');
const container = document.getElementById('container');
const signIn = document.getElementById('signIn');
const emailSignIn = document.getElementById('emailSignIn');
const passwordSignIn = document.getElementById('passwordSignIn');
const register = document.getElementById('register')
const loginForm = document.getElementById('loginForm')
const form = document.getElementById('form')



// Clases Profile constructer
class Profile {
    constructor(registerName, registerEmail, registerPassword) {
        this.registerName = registerName
        this.registerEmail = registerEmail
        this.registerPassword = registerPassword
    }

}
//Store clases for localsrtorge
class Store {
    static getProfile() {
        let profiles;
        if (localStorage.getItem('profiles') === null) {
            profiles = [];
        } else {
            profiles = JSON.parse(localStorage.getItem('profiles'))
        }
        return profiles
    }

    //add prodil to localastorge
    static addProfile(profile) {
        const profiles = Store.getProfile();
        profiles.push(profile);
        localStorage.setItem('profiles', JSON.stringify(profiles))
    }

    //log in static
    static login(email, pW) {
        let profiles = getProfile()
        let res = 3  // any number but not 0 or1 or 2
        profiles.forEach(item => {

            if (item.registerEmail === email && item.registerPassword === pW) {
                res = 2 //2 : email && password correct
            } else if (item.registerEmail === email) {
                res = 1 //1: password is incorrect
            } else {
                res = 0 // 0 : either email or password are incorrect
            }
        })

        return res
    }
}


// Event Listener

registerSwich.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInSwich.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
register.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
})



loginForm.addEventListener('submit', function (e) {
    let dataSing = JSON.parse(localStorage.getItem('profiles'))
    //     console.log(dataSing[0].registerName)
    e.preventDefault()
    let exist = false
    dataSing.forEach(item => {
        if (emailSignIn.value === item.registerEmail && passwordSignIn.value === item.registerPassword) {
            exist = true
            sessionStorage.user = JSON.stringify(item)
            // console.log('Hey')

        }
    })
    if (exist) {

        window.location.href = "/Currency.html";
    } else {
        alert('User Name or Pasword not Exist')
    }
})


form.addEventListener('submit', function (e) {

    const registerName = document.getElementById('registerName').value;
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;


    const profile = new Profile(registerName, registerEmail, registerPassword)
    console.log(profile)



    e.preventDefault();
    Store.addProfile(profile);
})


register.addEventListener('click', function (e) {
    data = {
        name: document.getElementById('registerName').value,
        email: document.getElementById('registerEmail').value,
        password: document.getElementById('registerPassword').value

    }
})









