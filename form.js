const register = document.querySelector(".creat-account");

register.onclick = () => {
document.querySelector(".form-sign-up").style.display = "initial";
document.querySelector(".form-login").style.display = "none";
}

const login = document.querySelector(".btn-login");

login.onclick = () => {
document.querySelector(".form-sign-up").style.display = "none";
document.querySelector(".form-login").style.display = "initial";
}
