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

let inputs= document.getElementsByName('name');
for (let i = 0; i < newstr.length; i++) 
{
  let arrName= newstr[i][0].toUpperCase() + newstr[i].slice(1).toLowerCase(); 
  console.log(arrName);
  inputs[i].value=arrName;
};
}
