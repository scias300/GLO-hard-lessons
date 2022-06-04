let arr = [
    '123',
    '456',
    '789',
    '987654321',
    '951753',
    '258963741',
    '333333333333333333'
];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 2 || arr[i].charAt(0) == 4) {
        console.log(arr[i]);
    }
}

for (let i = 1; i <= 100; i++) {
    let counter = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            counter++;
        }
    }
    if (counter === 2) {
        console.log(i, 'Делители этого числа: 1 и ' + i);
    }
}