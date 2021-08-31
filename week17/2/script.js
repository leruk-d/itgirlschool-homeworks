let addInputBtn = document.getElementById("btn");
let talkContainer = document.querySelector(".talk-container");
let comment = document.getElementById("comments");


function checkSpam(comments) {
    return `<div>${comments}</div> <hr>`;
}

addInputBtn.addEventListener("click", () => {
   let commentInput = document.getElementById("comments");

    if (!commentInput.value) return;
    let str=commentInput.value.replace(/(viagra|xxx)/gi, '***');
    let newCommentAsString = checkSpam(str);
    talkContainer.innerHTML = talkContainer.innerHTML + newCommentAsString;
    commentInput.value = "";
});

