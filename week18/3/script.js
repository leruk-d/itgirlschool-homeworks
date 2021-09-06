

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

  document.getElementById("chat").innerHTML+=`<span class='author'>${author}:</span>${str}<br>`;

}

function checkMessage() {
    
let author = document.getElementById("author").value;
let comments=document.getElementById("comments").value;

if(localStorage.getItem('name')==null){
    localStorage.setItem('name',author)
}

sendMessage(author,comments) 
}
//надо загрузить аватар и