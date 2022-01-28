// Примеры открытых и бесплатных API:
// [https://developers.giphy.com/docs/api](https://developers.giphy.com/docs/api) (гифки)
// [https://api.nasa.gov/](https://api.nasa.gov/) (данные NASA)
// [https://openweathermap.org/api](https://openweathermap.org/api) (погода, требует генерации ключа)

// Сделайте простенький сайт, который будет получать данные с сервера - используйте любой открытый API.
// Это может быть, например, список галактик от NASA или список ваших проектов на Github.
//  Или что угодно еще, что вы захотите реализовать.
//  В процессе разработки использовать хотя бы 1 запрос к серверу через команду fetch.
// let button=document.getElementById('btn');
// let result=document.getElementById('result');

document.addEventListener("DOMContentLoaded", function (event) {
  fetch("https://api.github.com/users/leruk-d/repos")
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        document.getElementById("container").innerHTML += `<div class="item">
                <h2><a href="${response[i].html_url}">${response[i].name}</a></h2>
                </div>`;
      }
    })
    .catch((error) => alert(error));
});
