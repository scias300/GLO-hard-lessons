const num = 266219;
const numStr = num.toString();
let accum = 1;

for (let i = 0; i < numStr.length; i++) {
    accum *= numStr[i];
}
console.log(accum);

let accumPow = accum ** 3;
console.log(accumPow.toString().slice(0, 2));

let lang = prompt('Введите язык в формате ru или en');
const weekRu = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
const weekEn = 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday';
let arr = [];
arr.ru = weekRu;
arr.en = weekEn;

while (lang !== 'ru' && lang !== 'en') {
    lang = prompt('Введите язык в формате ru или en');
}

if (lang === 'ru') {
    console.log(weekRu);
} else if (lang === 'en') {
    console.log(weekEn);
}

switch (lang) {
    case 'ru':
        console.log(weekRu);
        break;
    case 'en':
        console.log(weekEn);
        break;
}

console.log(arr[lang]);

const namePerson = prompt('Кто ты?');

let role = (namePerson === 'Артем') ? console.log('директор') :
    (namePerson === 'Александр') ? console.log('преподаватель') :
        console.log('студент');