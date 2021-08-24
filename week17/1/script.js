function checkInput() {
  let userName = document.getElementById('fullname').value;
  let str = userName.trim(userName);
  let newstr = str.trim().replace(/\s+/g, " ").split(' '); //преобразовали сразу в массив через split() 
  console.log(newstr);

  let firstName = newstr[0];
  console.log(firstName);
  let lastName = newstr[1];
  console.log(lastName);
  let fatherName = newstr[2];
  console.log(fatherName);


for (let i = 0; i < newstr.length; i++) 
{
  let arrName= newstr[i][0].toUpperCase() + newstr[i].slice(1).toLowerCase(); 
  console.log(arrName);

  document.getElementById("surname").innerHTML=arrName[0];
  document.getElementById("name").innerHTML=arrName[1];
  document.getElementById("patronymic").innerHTML=arrName[2];
};
// let inputFirstName = document.querySelector("surname");

// let newFirstName= firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// console.log(newFirstName);
// let newLastName= lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
// console.log(newLastName);
// let newFatherName= fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase();
// console.log(newFatherName);

// let firstNameContainer = document.querySelector(".surname");
// let firstLastName = document.querySelector(".name");
// let firstFatherName = document.querySelector(".patronymic");


  // document.getElementById("surname").innerHTML=newFirstName;
  // document.getElementById("name").innerHTML=newLastName;
  // document.getElementById("patronymic").newFatherName;
}
