const num = 266219;
const numStr = num.toString();
let accum = 1;

for (let i = 0; i < numStr.length; i++) {
    accum *= numStr[i];
}
console.log(accum);

let accumPow = accum ** 3;
console.log(accumPow.toString().slice(0, 2));