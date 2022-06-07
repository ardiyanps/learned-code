const readline = require('readline-sync');

// #operator penugasan
// let a = 1
// console.log('Nilai awal a : ' + a);
// a += 1
// console.log('Setelah ditambah 1, Nilai a : ' + a);
// a *= 3
// console.log('Setelah dikali 1, Nilai a : ' + a);
// a /= 2
// console.log('Setelah dibagi 1, Nilai a : ' + a);

// #operator aritmatika
// let a = parseInt(readline.question('Masukan nilai a : '));
// let b = parseInt(readline.question('Masukan nilai b : '));

// console.log(`${a} + ${b} = ${a + b}`);
// console.log(`${a} - ${b} = ${a - b}`);
// console.log(`${a} * ${b} = ${a * b}`);
// console.log(`${a} / ${b} = ${a / b}`);
// console.log(`${a} % ${b} = ${a % b}`);
// console.log(`${a} ** ${b} = ${a ** b}`);

// function intdiv(a, b) {
//     let c = a / b;
//     if (c >= 0) {
//         return Math.floor(c);
//     } else {
//         return Math.ceil(c);
//     }
// }
// #atau
// function intdiv(a, b) {
//     let c = a / b;
//     if (c >= 0) ? Math.floor(c) : Math.ceil(c);
// }

// let a = parseInt(readline.question('Masukan nilai a : '));
// let b = parseInt(readline.question('Masukan nilai b : '));

// console.log(`${a} / ${b} = ${intdiv(a,b)}`);

// #operator increment dan decrement
// console.log('Pre-increment');
// x = 9;
// console.log(`x \t: ${x}`);
// console.log(`++x \t: ${++x}`);
// console.log(`x \t: ${x}`);
// console.log(`--x \t: ${--x}`);
// console.log(`x \t: ${x}`);

// console.log('Post-increment');
// x = 8;
// console.log(`x \t: ${x}`);
// console.log(`x++ \t: ${x++}`);
// console.log(`x \t: ${x}`);
// console.log(`x-- \t: ${x--}`);
// console.log(`x \t: ${x}`);

// #operator relasional
// let a = parseInt(readline.question('Masukan nilai a : '));
// let b = parseInt(readline.question('Masukan nilai b : '));

// console.log(`a \t: ${a}`);
// console.log(`b \t: ${b}`);
// console.log(`a == b \t: ${a == b}`);
// console.log(`a != b \t: ${a != b}`);
// console.log(`a < b \t: ${a < b}`);
// console.log(`a > b \t: ${a > b}`);
// console.log(`a <= b \t: ${a <= b}`);
// console.log(`a >= b \t: ${a >= b}`);

// if (a < b) {
//     console.log(`a lebih kecil dari b`);
// }
// while (a <= b) {
//     process.stdout.write(`${a} `)
//     a += 2
// }

// if (a > b) {
//     console.log(`a lebih besar dari b`);
// }
// while (a >= b) {
//     process.stdout.write(`${a} `)
//     a -= 2
// }

// #operator logika
// console.log('\nLogika AND');
// console.log(`true + true \t: ${true && true}`);
// console.log(`true + false \t: ${true && false}`);
// console.log(`false + true \t: ${false && true}`);
// console.log(`false + false \t: ${false && false}`);

// console.log('\nLogika OR');
// console.log(`true + true \t: ${true || true}`);
// console.log(`true + false \t: ${true || false}`);
// console.log(`false + true \t: ${false || true}`);
// console.log(`false + false \t: ${false || false}`);

// console.log('\nLogika NOT');
// console.log(`true \t: ${!true}`);
// console.log(`false \t: ${!false}`);

// #operator bitwise
// let a = parseInt(readline.question('Masukan nilai a : '));
// let b = parseInt(readline.question('Masukan nilai b : '));

// console.log(`a \t: ${a}`);
// console.log(`b \t: ${b}`);
// console.log(`a & b \t: ${a & b}`);
// console.log(`a | b \t: ${a | b}`);
// console.log(`a ^ b \t: ${a ^ b}`);
// console.log(`~a \t: ${~a}`);

// #operator string
// let data = ['Apel', 'Durian', 'Jeruk'];

// let s = '[';
// for (let i = 0; i < data.length; i++) {
//     s += '\'' + data[i] + '\'';
//     if (i < data.length-1) {
//         s += ', ';
//     }
// }
// s += ']';

// console.log('s: ' + s);
// console.log(data);
// #atau
// let str = data.join("', '");
// console.log("s: ['"+ str +"']");

// #operator kondisional
// let a = parseInt(readline.question('Masukan nilai a : '));
// let b = parseInt(readline.question('Masukan nilai b : '));

// let maks;
// maks = (a > b) ? a : b;
// console.log(maks);

// let a = parseInt(readline.question('Masukan bilangan bulat : '));

// process.stdout.write(`${a} adalah bilangan `);
// console.log((a % 2 == 0) ? 'genap' : 'ganjil');

// #operator in
// let data = ['Apel', 'Durian', 'Jeruk'];
// let cek = 0 in data;
// console.log(cek);

// # operator typeof
let a = 10;
let b = 'Sepuluh';
let c = [1,2,3,4,5];
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));