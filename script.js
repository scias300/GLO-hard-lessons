'use strict';

const out = document.querySelector('.out');
let day = new Date().getDay() - 1;
let message = '';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

if (day === -1) {
    day = week.length - 1;
}

for (let key in week) {
    if (day == key) {
        if (week[key] === 'Суббота' || week[key] === 'Воскресенье') {
            message += `<b><i>${week[key]}</i></b><br>`;
        } else {
            message += `<b>${week[key]}</b><br>`;
        }
    } else {
        if (week[key] === 'Суббота' || week[key] === 'Воскресенье') {
            message += `<i>${week[key]}</i><br>`;
        } else {
            message += week[key] + '<br>';
        }
    }
}

out.innerHTML = message;