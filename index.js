setInterval(() => {
    date = new Date();
    hours = date.getHours();
    min = date.getMinutes();
    seconds = date.getSeconds();
    Hrotation = 30*hours + min/2;
    Mrotation = 6*min;
    Srotation = 6*seconds;
    hour.style.transform = `rotate(${Hrotation}deg)`;
    minute.style.transform = `rotate(${Mrotation}deg)`;
    second.style.transform = `rotate(${Srotation}deg)`;
}, 1000);

