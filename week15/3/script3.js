// function changeBG() {
//     if (document.getElementById("color").value == "white"){
//     document.body.style.backgroundColor = "#FFFFFF";
//     }
//     if (document.getElementById("color").value == "dark"){
//     document.body.style.backgroundColor = "#808080";
//     }
//     if (document.getElementById("color").value == "blue"){
//     document.body.style.backgroundColor = "#0000ff";
// }
// }


// let choiceColor= document.getElementById("color");

// function changeBG() {
//     if (choiceColor.value === "white"){
//     document.body.style.backgroundColor = "#FFFFFF";
//     } else if (choiceColor.value === "dark"){
//     document.body.style.backgroundColor = "#808080";
//     } else if (choiceColor.value === "blue"){
//     document.body.style.backgroundColor = "#0000ff";
//     }
// }

let choiceColor = document.getElementById("color");

function changeBG() {
    switch (choiceColor.value) {
        case 'white': 
            document.body.style.backgroundColor = "#FFFFFF";
        break;
        case 'dark':  
            document.body.style.backgroundColor = "#808080"; 
        break;
        case 'blue': 
            document.body.style.backgroundColor = "#0000ff"; 
        break;
    }
}
