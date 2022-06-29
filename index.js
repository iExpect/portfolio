function login() {
    var register = document.getElementById('register');
    register.style.display = "none";
    var login = document.getElementById('login');
    login.style.display = "block";

}

function register() {
    var login = document.getElementById('login');
    login.style.display = "none";
    var register = document.getElementById('register');
    register.style.display = "block";

}

function clo() {
    var logi = document.getElementById('loginpage');
    logi.style.display = "none";
    var body = document.getElementById('body');
    body.style.overflowY = "scroll";
    main.style.opacity = "1";
}

function sho() {
    var logi = document.getElementById('loginpage');
    logi.style.display = "flex";
    var body = document.getElementById('body');
    body.style.overflowY = "hidden";
    var main = document.getElementById('main');
    main.style.opacity = "0.7";
}