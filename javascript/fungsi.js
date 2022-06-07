const readline = require('readline-sync');


// let a = parseFloat(readline.question('Masukan nilai a : '));
// let b = parseFloat(readline.question('Masukan nilai b : '));

// function kali(a, b) {
//     c = a * b;
//     console.log(`Hasil kali : \n ${a} x ${b} = ${c}`);
//     return c ;
// }

// kali(a, b);
// kali(10, 10);

// function tukar(a, b) {
//     let c = a;
//     a = b;
//     b = c;
// }

// let x = 100;
// let y = 200;

// console.log(x);
// console.log(y);
// tukar(x, y);
// console.log(x);
// console.log(y);

// function increment(a) {
//     a.x += 1;
// }

// let object = new Object();
// object.x = 10;

// console.log(object.x);
// increment(object);
// console.log(object.x);

// function cetak(a=10) {
//     console.log(a);
// }

// cetak();
// cetak(555);

// function cetak(s, n=45) { // nilai parameter di akhir
//     for (let i = 0; i < n; i++) {
//         console.log(s += '*');
//     }
// }

// cetak("*");

// function cetak(s, n=10, newLine=true) {
//     for (let i = 0; i < n; i++) {
//         process.stdout.write(s);
//         if (newLine) process.stdout.write('\n');
//     }
// }

// cetak('Javascript');
// cetak('Javascript', 2);
// cetak('Javascript', 4, false);

// function sum(a) {
//     if (!typeof a === 'Array') {
//         console.log("Error : Parameter harus bertipe Array");
//         return;
//     }
//     let total = 0.0;
//     for (let elemen of a) {
//         total += elemen;
//     }
//     return total;
// }
// console.log('sum([10,20]): ' + sum([10,20]));
// console.log('sum([10,20,30]): ' + sum([10,20,30]));
// console.log('sum([10,20,30,40]): ' + sum([10,20,30,40]));
// rest-parameter
// function sum(...a) {
//     let total = 0.0;
//     for (let elemen of a) {
//         total += elemen;
//     }
//     return total;
// }

// console.log('sum(10,20): ' + sum(10,20));
// console.log('sum(10,20,30): ' + sum(10,20,30));
// console.log('sum(10,20,30,40): ' + sum(10,20,30,40));

// #fungsi tanpa nama (anonymous function)
// let a = parseFloat(readline.question('Masukan nilai a : '));
// let b = parseFloat(readline.question('Masukan nilai b : '));
// let tambah = function (a,b) {
//     return a + b;
// }
// let hasil = tambah(8,10);
// console.log(hasil);

// let tambah = (a, b) => a + b;
// let hasil = tambah(a, b);
// console.log(`${a} + ${b} = ${hasil}`);

// #fungsi callback
// let a = parseFloat(readline.question('Masukan nilai a : '));
// let b = parseFloat(readline.question('Masukan nilai b : '));

// let tambah = (a, b) => a + b;
// let kurang = (a, b) => a - b;
// let kali = (a, b) => a * b;
// let bagi = (a, b) => a / b;
// let hitung = (a, b, callback) => {
//     return callback(a, b);
// }

// console.log(`${a} + ${b} = ${hitung(a, b, tambah)}`);
// console.log(`${a} - ${b} = ${hitung(a, b, kurang)}`);
// console.log(`${a} x ${b} = ${hitung(a, b, kali)}`);
// console.log(`${a} : ${b} = ${hitung(a, b, bagi)}`);

// #atau
// let hitung = (a, b, callback) => {
//         return callback(a, b);
//     }

// console.log(`${a} + ${b} = ${hitung(a, b, (() => { return a + b; }))}`);
// console.log(`${a} - ${b} = ${hitung(a, b, (() => { return a - b; }))}`);
// console.log(`${a} * ${b} = ${hitung(a, b, function () { return a * b; })}`);
// console.log(`${a} : ${b} = ${hitung(a, b, function () { return a / b; })}`);

function hipotenusa(a, b) {
    function kuadrat(x) {
        return x * x;
    }
    let c = Math.sqrt(kuadrat(a) + kuadrat(b));
    return c;
}

console.log('Menghitung sisi miring segitiga siku-siku')
let a = parseFloat(readline.question('Masukan alas : '));
let b = parseFloat(readline.question('Masukan tinggi : '));

let c = hipotenusa(a, b);
console.log(`Sisi miring : ${c}`);