
// let errors = [];

// let passwordField = document.getElementById("password");
// let emailField = document.getElementById("email");
// let telField = document.getElementById("number");
// let nameField = document.getElementById("username");



// function ValidateUsername(nameField) {
//    let nameFormat = /^[А-ЯЁ][а-яё]*(\s[А-ЯЁ][а-яё]*)?$/;
//     if (nameField.value.match(nameFormat)) {
//         username.style.border = '1px solid green';
//         return true;
       
//     } else {
//         document.getElementById('errorMessage').innerHTML += (".<br>Ваше имя введено неверно!");
//         username.style.border = '1px solid red';
//         return false;
//     }
// }


// function ValidatePassword(passwordField) {
//     let passwordFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
//     if (passwordField.value.match(passwordFormat)) {
//         password.style.border = '1px solid green';
//         return true;
//     } else {
//         errors.push("Ваше пароль введен неверно!");
//         return false;
//     }
// }

// function ValidateEmail(emailField) {
//    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//     if (emailField.value.match(mailFormat)) {
//         return true;
//     } else {
//         errors.push("Ваш адрес электронной почты введен неверно!");
//         return false;
//     }
// }

// function ValidateTel(telField) {
//     let telFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
//     if (telField.value.match(telFormat)) {
//         return true;
//     } 
//     else {
//         errors.push("Ваш номер телефона введен неверно!");
//         return false;
//     }
// }

let errors = [];
console.log(errors );

function checkValidity(input){
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле'+' '+ input.placeholder +' '+ 'не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения'+' '+ input.placeholder );
    }

    if (validity.rangeOverflow) {
        let max =getAttributeValue(input, 'max');
        errors.push('Максимальное значение не может быть больше чем ' + max);
    }

    if (validity.rangeUnderflow) {
        let min = getAttributeValue(input, 'min');
        errors.push('Минимальное значение не может быть меньше чем ' + min);
    }

}
function checkAll(){
   
        errors=[];

        let inputs=document.querySelectorAll("input");
        for(let input of inputs){
            checkValidity(input);
        }
        document.getElementById('errorMessage').innerHTML=errors.join('.<br>');
      
    }
// Неверный формат заполнения во всех инпутах, не понимаю почему?!





// function check() {
//     checkAll();
//  ValidateUsername(nameField);
// ValidatePassword(passwordField);
//   ValidateEmail(emailField);
//   ValidateTel(telField);
// }
