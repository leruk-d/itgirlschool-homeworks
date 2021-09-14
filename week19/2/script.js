 class Cat {
    constructor(petName, name, tel, petBreed, feed, sexCat) {
         this.petName = petName;
         this.name = name;
         this.tel = tel;
         this.petBreed = petBreed;
         this.feed = feed;
         this.sexCat = sexCat;
     }
 }
 function newCat() {

     let petName1 = document.getElementById('name').value;
     let name1 = document.getElementById('name1').value;
     let tel1 = document.getElementById('phone').value;
     let petBreed = document.querySelector('option[class="breed"]:checked').value;
 let feed=getCheckBox() ;
     let sexCat = checkSex();

let cat1= new Cat(petName1, name1, tel1, petBreed, feed, sexCat);
console.log(cat1);
 }


 function getCheckBox() {
     let chackboxes = document.getElementsByClassName('pet');
     let arr = [];
     for (let i = 0; i < arr.length; i++) {
         if (chackboxes[i].checked) {
            arr.push(chackboxes[i].value);
         }
     }
 }


 function checkSex() {
     let radioSex = document.getElementsByClassName('sex');
     for (i = 0; i < radioSex.length; i++) {
         if (radioSex[i].checked) {
             break;
         }
     }
     return radioSex[i].value;
 }

