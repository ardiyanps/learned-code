const readline = require('readline-sync');

// #break
// for (let i = 0; i < 100; i++) {
//     if (i === 24) break;
//     process.stdout.write(i + ' ');
// }

// const data = [30, 60,10, 50, 40, 20, 70];

// let a = parseInt(readline.question('Masukan nilai yang dicari : '));
// let index = -1;
// for ( let i in data) {
//     if (data[i] === a) {
//         index = i;
//         break;
//     }
// }

// if (index > -1) {
//     console.log(`${a} ditemukan pada index ke-${index}`);
// } else {
//     console.log(`${a} tidak ditemukan`);
// }

// #perintah continue
// for (let i = 0; i < 35; i++) {
//     if (i % 2 === 0) continue;
//     process.stdout.write(i + ' ');
// }

// while (true) {
//     let username = readline.question('Username : ');
//     let password = readline.question('Password : ');
//     if (username !== 'user' || password !== 'pass') {
//         console.log('Usename/Password salah \n');
//         continue;
//     }
//     console.log('\nSelamat datang, Login berhasil');
//     break;
// }

// #perintah return
// function kali(a, b) {
//     c = a * b;
//     return c;
// }
// function bagi(a, b) {
//     c = a / b;
//     return c;
// }

// let a = parseInt(readline.question('Masukan nilai a : '));
// let b = parseInt(readline.question('Masukan nilai b : '));
// let hasilKali;

// hasilKali = kali(a, b); 
// let hasilBagi = bagi(a, b);
// console.log(`${a} x ${b} = ${hasilKali}`);
// console.log(`${a} / ${b} = ${hasilBagi}`);

// #fungsi process.exit()
// let a = parseInt(readline.question('Masukan nilai a : '));
// let b = parseInt(readline.question('Masukan nilai b : '));
// let c;

// if (b === 0) {
//     console.log('Kesalahan : Nilai b tidak boleh nol');
//     process.exit(1)
// }

// c = a / b;
// console.log(`${a} / ${b} = ${c}`);