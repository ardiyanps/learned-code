let aritmetika = require('./aritmetika');

let a = 10; b = 20;

console.log(`${a} + ${b} = ` + aritmetika.tambah(a, b));
console.log(`${a} - ${b} = ` + aritmetika.kurang(a, b));
console.log(`${a} x ${b} = ` + aritmetika.kali(a, b));
console.log(`${a} : ${b} = ` + aritmetika.bagi(a, b));