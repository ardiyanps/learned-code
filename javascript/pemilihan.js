const readline = require('readline-sync');

// #perintah if
// let i = 1;
// let s = 'JS';
// let a = [1,2,3];

// console.log((i) ? 'true' : 'false');
// console.log((s) ? 'true' : 'false');
// console.log((a) ? 'true' : 'false');

// let a = parseFloat(readline.question('Masukan nilai a : '));
// let b = parseFloat(readline.question('Masukan nilai b : '));
// let c;

// if (b === 0) {
//     console.log('Kesalahan : Nilai b tidak boleh nol');
//     process.exit(1);
// }

// c = a / b;
// console.log(`${a} / ${b} = ${c}`);
// #atau
// if (b === 0) {
//     console.log('Kesalahan : Nilai b tidak boleh nol');
//     process.exit(1);
// } else {
//     c = a / b;
//     console.log(`${a} / ${b} = ${c}`);
// }

// let a = parseInt(readline.question('Masukan bilangan bulat : '));

// if (a % 2 === 0) {
//     console.log(`${a} adalah bilangan genap`);
// } else {
//     console.log(`${a} adalah bilangan ganjil`);
// }

// if (a > 0) {
//     console.log(`${a} adalah bilangan genap`);
// } else if (a === 0) {
//     console.log(`anda memasukan nilai nol`);
// } else {
//     console.log(`${a} adalah bilangan negatif`);
// }

// let noBulan = parseInt(readline.question('Masukan nomor bulan : '));
// let namaBulan;

// if (noBulan === 1) {
//     namaBulan = 'Januari';
// } else if (noBulan === 2) {
//     namaBulan = 'Februari';
// } else if (noBulan === 3) {
//     namaBulan = 'Maret';
// } else if (noBulan === 4) {
//     namaBulan = 'April';
// } else if (noBulan === 5) {
//     namaBulan = 'Mei';
// } else if (noBulan === 6) {
//     namaBulan = 'Juni';
// } else if (noBulan === 7) {
//     namaBulan = 'Juli';
// } else if (noBulan === 8) {
//     namaBulan = 'Agustus';
// } else if (noBulan === 9) {
//     namaBulan = 'September';
// } else if (noBulan === 10) {
//     namaBulan = 'Oktober';
// } else if (noBulan === 11) {
//     namaBulan = 'November';
// } else if (noBulan === 12) {
//     namaBulan = 'Desember';
// } else {
//     console.log(`Tidak ada bulan ke -${noBulan}`);
//     process.exit(1);
// }

// console.log(`Nama bulan ke ${noBulan} adalah ${namaBulan}`);

// #perintah switch
// let noBulan = parseInt(readline.question('Masukan nomor bulan : '));
// let namaBulan;

// switch (noBulan) {
//     case 1: namaBulan = 'Januari'; break;
//     case 2: namaBulan = 'Februari'; break;
//     case 3: namaBulan = 'Maret'; break;
//     case 4: namaBulan = 'April'; break;
//     case 5: namaBulan = 'Mei'; break;
//     case 6: namaBulan = 'Juni'; break;
//     case 7: namaBulan = 'Juli'; break;
//     case 8: namaBulan = 'Agustus'; break;
//     case 9: namaBulan = 'September'; break;
//     case 10: namaBulan = 'Oktober'; break;
//     case 11: namaBulan = 'November'; break;
//     case 12: namaBulan = 'Desember'; break;
//     default: {
//         console.log(`Tidak ada bulan ke -${noBulan}`);
//         process.exit(1);
//     }
// }

// console.log(`Nama bulan ke ${noBulan} adalah ${namaBulan}`);

let noBulan = parseInt(readline.question('Masukan nomor bulan : '));
let namaBulan;

switch (noBulan) {
    case 1: 
    case 2: 
    case 3: console.log('Triwulan I'); break;
    case 4: 
    case 5: 
    case 6: console.log('Triwulan II'); break;
    case 7: 
    case 8: 
    case 9: console.log('Triwulan III'); break;
    case 10: 
    case 11: 
    case 12: console.log('Triwulan IV'); break;
    default: {
        console.log(`Tidak ada bulan ke -${noBulan}`);
    }
}
