function check(){
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password_again");
    let email = document.getElementById("email");
    let num = document.getElementById("number");

    document.getElementById('errorMessage').innerHTML= "";
    
    if (name.value ==''){
    document.getElementById('errorMessage').innerHTML+= "Ваше имя не заполнено<br>";
    }
    if (password.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш пароль не заполнен<br>";
    }
    if (password2.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш пароль не заполнен<br>";
    }
    if (email.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш емейл не заполнен<br>";
    }
    if (num.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш номер не заполнен<br>";
    }
}