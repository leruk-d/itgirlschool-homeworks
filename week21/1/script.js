
function search(){
    let searchValue=document.getElementById("search").value;
    let api_key="2crkCOKP6fb7R7sRcFkAwG82ushIijkU";
    document.getElementById("container").innerHTML = "";

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchValue}&limit=5&offset=0&rating=g&lang=en`)
    .then(response=>response.json())
    .then(json => {
        console.log(json);
        for (let i = 0; i < json.data.length ; i++) {
            let url = json.data[i].images.original.url;
            document.getElementById("container").innerHTML += `<img src="${url}" alt="gif">`;
        }
    })
    .catch(err => console.log(err));
}

