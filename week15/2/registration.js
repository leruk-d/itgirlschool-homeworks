
function check(){
    let user = document.getElementById("username");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password_again");
    let email = document.getElementById("email");
    let num = document.getElementById("number");

    let form  = document.getElementsByTagName('form')[0];
form.isValid = true;

    document.getElementById('errorMessage').innerHTML= "";
    
    if (user.value ==''){  
    document.getElementById('errorMessage').innerHTML+= "Ваше имя не заполнено<br>";
    form.isValid = false;
    }
    if (password.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш пароль не заполнен<br>";
        form.isValid = false;
    }
    if (password2.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш пароль не заполнен<br>";
        form.isValid = false;
    }
    if (email.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш емейл не заполнен<br>";
        form.isValid = false;
    }
    if (num.value ==''){
        document.getElementById('errorMessage').innerHTML+= "Ваш номер не заполнен<br>";
        form.isValid = false;
    }
    if (password2.value != password.value){
        document.getElementById('errorMessage').innerHTML+= "Неверный пароль<br>";
        form.isValid = false;
    }
    if(password.value.length<=5){
        document.getElementById('errorMessage').innerHTML+= "Пароль короткий<br>";
        form.isValid = false;
    } 
    
    if (form.isValid == true) {
        let userName=user.value;
        alert(`Добро пожаловать, ${userName}!`)
    }
}
check();