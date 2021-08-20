function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    if (diff < 1000) {
        return ("прямо сейчас")
    };
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + "секунд назад"
    }
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + "минут назад"
    } else {
        return `${date.getDate()}.${"0"+(date.getMonth()+1)}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    }
};


alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата 
alert(formatDate(new Date(new Date - 86400 * 1000)));