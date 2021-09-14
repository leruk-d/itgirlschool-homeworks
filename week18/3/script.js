

//проверим есть в локал сторедже имя, и если оно не равно null, мы должны его показать.
document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById("author").value = name;}

        let newComment = JSON.parse(localStorage.getItem('comment'));
        if (newComment != null) {
            comment .value = newComment;
        }
    })

function sendMessage(author,comments) {

    //добавляем имя и комментарий
    let commentInput = document.getElementById("comments");
    if (!commentInput.value) return;
    let str = commentInput.value.replace(/(viagra|виагра|xxx)/gi, '***');

    let input = event.target;
    document.getElementById("chat").innerHTML+=`<span class='author'>${author}:</span>${str}<br>`;

}

function checkMessage() {
    
let author = document.getElementById("author").value;
let comments=document.getElementById("comments").value;

if(localStorage.getItem('name')==null){
    localStorage.setItem('name',author)
}
// localStorage.setItem('photo', output.src);
localStorage.setItem('photo', blah.src);
sendMessage(author,comments) 
}

//загрузить аватар 

// let openFile = function(event) {
//     let input = event.target;

//     let reader = new FileReader();
//     reader.onload = function(){
//       let dataURL = reader.result;
//       let output = document.getElementById('output');
//       output.src = dataURL;
//     };
//    reader.readAsDataURL(input.files[0]);
//   }; 
// let avatarka=document.getElementById('output');



// ava.addEventListener('change',()=>{
//     let reader=new FileReader();
//     let files=ava.files[0];

//     ava.parentElement.firstCgild.remove();
//   reader.readAsDataURL(files);
//   reader.onload=()=>{
//       userImage.src=reader.result;
//     }
//   }
// )
// localStorage.setItem('photo',userImage.src)

ava.onchange = evt => {
    const [file] = ava.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }
