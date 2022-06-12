'use strict';

const out = document.querySelector('.out');
let now = new Date();
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

let getHours = function () {
    let hour = now.getHours();
    if (hour === 0 || hour >= 5 && hour <= 20) {
        return hour + ' часов';
    }
    if (hour === 1 || hour === 21) {
        return hour + ' час';
    }
    if (hour >= 2 && hour <= 4 || hour >= 21 && hour <= 24) {
        return hour + ' часа';
    }
};

let getMinutes = function () {
    let minute = now.getMinutes();
    let numberStr = minute + '';
    let lastNum = numberStr.slice(-1);
    lastNum = +lastNum;
    if (minute >= 10 && minute <= 19) {
        return minute + ' минут';
    } else {
        if (lastNum === 0 || lastNum >= 5 && lastNum <= 9) {
            return minute + ' минут';
        }
        if (lastNum >= 2 && lastNum <= 4) {
            return minute + ' минуты';
        }
        if (lastNum === 1) {
            return minute + ' минута';
        }
    }
};

let getSeconds = function () {
    let second = now.getSeconds();
    let numberStr = second + '';
    let lastNum = numberStr.slice(-1);
    lastNum = +lastNum;
    if (second >= 10 && second <= 19) {
        return second + ' секунд';
    } else {
        if (lastNum === 0 || lastNum >= 5 && lastNum <= 9) {
            return second + ' секунд';
        }
        if (lastNum >= 2 && lastNum <= 4) {
            return second + ' секунды';
        }
        if (lastNum === 1) {
            return second + ' секунда';
        }
    }
};

let getZeros = function (number) {
    let numberStr = number + '';
    if (numberStr.length === 1) {
        return '0' + number;
    }
    return number;
};

out.innerHTML = `Сегодня ${week[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${getHours()} ${getMinutes()} ${getSeconds()}<br>`;
out.innerHTML += `${getZeros(now.getDate())}.${getZeros(now.getMonth())}.${now.getFullYear()} - ${getZeros(now.getHours())}:${getZeros(now.getMinutes())}:${getZeros(now.getSeconds())}`;

setInterval(function () {
    now = new Date();
    out.innerHTML = `Сегодня ${week[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${getHours()} ${getMinutes()} ${getSeconds()}<br>`;
    out.innerHTML += `${getZeros(now.getDate())}.${getZeros(now.getMonth())}.${now.getFullYear()} - ${getZeros(now.getHours())}:${getZeros(now.getMinutes())}:${getZeros(now.getSeconds())}`;
}, 1000);