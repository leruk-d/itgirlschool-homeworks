function check(){
    class Cat{
        construktor(petName,name,tel,petBreed,feed,sexCat){
            this.petName=petName;
            this.name=name;
            this.tel=tel;
            this.petBreed=petBreed;
            this.feed=feed;
            this.sexCat=sexCat;
        }
    }
    
    let petName1=document.getElementById('name').value;
    let name1=document.getElementById('name1').value;
    let tel=document.getElementById('phone').value;
    let petBreed=document.getElementById('breed').value;
  
  
    
    let cat1=new Cat(petName1,name1);
    console.log()
}
class Cat{
    construktor(petName,name,tel,petBreed){
        this.petName=petName;
        this.name=name;
        this.tel=tel;
        this.petBreed=petBreed;
        this.feed=feed;
        this.sexCat=this.sexCat;
    }
}
button.onclick=function Cat () {
    let petName1=document.getElementById('name').value;
    let name1=document.getElementById('name1').value;
    let tel1=document.getElementById('phone').value;
    let breed1=document.getElementById('breed').value;
    let pet1=document.getElementById('pet').value;  
}
Cat ();
console.log(Cat)


let cat1=new Cat(Cat ());
console.log()

function getCheckBox(){
    let chackboxes=document.getElementsByClassName('pet');
    let arr=[];
    console.log(arr);
    for( let i =0; i < arr.length; i++){
        if(chackboxes[i].checked){
            arr.push(chackboxes[i].value);
            let pet =hackboxes[i].value;
        }
    }
    return arr;
}  
console.log (getCheckBox())