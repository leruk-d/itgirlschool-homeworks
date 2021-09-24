    // собираем данные из полей ввода и записываем в переменные
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let phone = document.getElementById("number");
    let name = document.getElementById("username");
    let login = document.getElementById("login");

function check() {

    document.getElementById('errorMessage').innerHTML = "";

    if (email.value == '') {
        document.getElementById("errorMessage").innerHTML += "Ваш емейл не заполнен<br>"
    } else if (!validateEmail(email.value)) {
        document.getElementById("errorMessage").innerHTML += "Ваш емейл заполнен не верно<br>"
    }
    function validateEmail(email) {
        let regexEmail =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return regexEmail.test(email);
    }


    if (phone.value == '') {
        document.getElementById("errorMessage").innerHTML += "Ваш телефон не заполнен<br>"
    } else if (!validatePhone(phone.value)) {
        document.getElementById("errorMessage").innerHTML += "Ваш телефон заполнен не верно<br>"
    }
    function validatePhone(phone) {
        let regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return regexPhone.test(phone);
    }        


    if (password.value == '') {
        document.getElementById("errorMessage").innerHTML += "Ваш пароль не заполнен<br>"
    } else if (!ValidatePassword(password.value)) {
        document.getElementById("errorMessage").innerHTML += "Ваш пароль заполнен не верно<br>"
    }
    function ValidatePassword (password) {
        let regexPassword = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        return regexPassword.test(password);
    }   


    if (login.value == '') {
        document.getElementById("errorMessage").innerHTML += "Ваш логин не заполнен<br>"
    } else if (!ValidateLogin(login.value)) {
        document.getElementById("errorMessage").innerHTML += "Ваш логин заполнен не верно<br>"
    }
    function ValidateLogin (login) {
        let regexLogin= /^[a-z0-9_-]{3,16}$/i;
        return regexLogin.test(login);
    }   


    if (name.value == '') {
        document.getElementById("errorMessage").innerHTML += "Ваше имя не заполнено<br>"
    } else if (!ValidateName(name.value)) {
        document.getElementById("errorMessage").innerHTML += "Ваше имя заполнено не верно<br>"
    }
    function ValidateName (name) {
        let regexLogin= /^[А-ЯЁ][а-яё]*(\s[А-ЯЁ][а-яё]*)?$/;
        return regexLogin.test(name);
    }  

}



btn.onclick = function (event) {
    event.preventDefault();
    let user={
        name:name.value,
        login:login.value,
        password:password.value,
        email:email.value,
        phone:phone.value,
    }
fetch("https://httpbin.org/post",
{
    method:'POST',
    body:JSON.stringify(user),
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
})
.then(response=>response.json())
.then(user=>{
    console.log(user);
})
.catch(error=>console.log(error));
}