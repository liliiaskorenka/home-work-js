var form1 = document.getElementById("form1"),
    form2 = document.getElementById("form2"),
    log2 = document.getElementById("log2"),
    check2 = document.getElementById("check2"),
    login = document.getElementById("InputLogin"),
    email2 = document.getElementById("InputEmail"),
    email1 = document.getElementById("InputEmail1"),
    password1 = document.getElementById("InputPassword1"),
    password2 = document.getElementById("InputPassword"),
    confirgmpassword = document.getElementById("ConfirgmPassword"),
    againLogin = document.getElementById("againLogin"),
    againEmail = document.getElementById("againEmail"),
    againEmail1 = document.getElementById("againEmail1"),
    againPassword = document.getElementById("againPassword"),
    againPassword1 = document.getElementById("againPassword1"),
    againConfirgmPassword = document.getElementById("againConfirgmPassword"),
    email_r = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+)(\.[0-9a-zA-Z]+)$/;

log2.addEventListener("click", function (e) {
    e.preventDefault();
    form1.style.display = "block";
    form2.style.display = "none"

});


check2.addEventListener("click", function (e) {
    e.preventDefault();
    form1.style.display = "none";
    form2.style.display = "block"

});

form1.addEventListener("submit", function (e) {
    if (!email1.value || !email1.value.match(email_r)){
        e.preventDefault();
        againEmail1.style.display = "inline";
    } else {
        againEmail1.style.display = "none";
    }
    password1.value=password1.value.trim();
    if (!password1.value){
        e.preventDefault();
        againPassword1.style.display = "inline";
    } else {
        againPassword1.style.display = "none";
    }
});


form2.addEventListener("submit", function (e) {
    login.value=login.value.trim();
    if (!login.value){
        e.preventDefault();
        againLogin.style.display = "inline";
    } else {
        againLogin.style.display = "none";
    }
    if (!email2.value || !email2.value.match(email_r)){
        e.preventDefault();
        againEmail.style.display = "inline";
    } else {
        againEmail.style.display = "none";
    }
    password2.value=password2.value.trim();
    if (!password2.value || confirgmpassword.value!=password2.value){
        e.preventDefault();
        againPassword.style.display = "inline";
    } else {
        againPassword.style.display = "none";
    }
    confirgmpassword.value=confirgmpassword.value.trim();
    if (!confirgmpassword.value || confirgmpassword.value!=password2.value){
        e.preventDefault();
        againConfirgmPassword.style.display = "inline";
    } else {
        againConfirgmPassword.style.display = "none";
    }
});

form2.InputLogin.addEventListener("change", function () {
    this.value=this.value.trim();
    if (!this.value) {
        againLogin.style.display = "inline";
    } else {
        againLogin.style.display = "none";
    }
});

