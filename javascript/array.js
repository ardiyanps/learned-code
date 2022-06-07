const readline = require('readline-sync');


// let a = parseFloat(readline.question('Masukan nilai a : '));
// let b = parseFloat(readline.question('Masukan nilai b : '));

// const a = new Array();

// a[0] = 10;
// a[1] = 20;
// a[2] = 30;

// console.log(a.length);
// console.log(a);

// let n = parseFloat(readline.question('Masukan jumlah data : '));

// let a = new Array();
// let total = 0.0;
// for (let i = 0; i < n; i++) {
//     a[i] = parseFloat(readline.question(`Data ke-${i+1}: `));
//     total += a[i];   
// }

// let rataRata = total/a.length;

// console.log(`\nIsi srrsy a : [${a}]`);
// console.log(`Total data : ${total}`);
// console.log(`Rata-rata : ${rataRata}`);

// #array asosiatif
// let a = new Array();

// a['http'] = 'HyperText Transfer Protocol';
// a['html'] = 'HyperText Markup Language';
// a['xml'] = 'Extensible Markup Language';
// a['json'] = 'JavaScript Object Notation';

// for (key in a) {
//     console.log(key.toUpperCase() + ' \t= ' + a[key]);
// }

// Array berindeks
// let a = [];
// let b = [10,20,30];

// Array asosiatif
// let c = {};
// let d = {'satu': 1,'dua': 2,'tiga': 3};

// console.log(d['satu']);

// Array dua dimensi
let barang = [
    ['B001', 'Spidol', 8500],
    ['B002', 'Stabilo', 13000],
    ['B003', 'Pensil', 5500],
    ['B004', 'Crayon', 12000],
];

console.log('Kode \t Nama Barang \t Harga');
console.log('---- \t ----------- \t -----');
for (let i = 0; i < barang.length; i++) {
    for (let j = 0; j < barang[i].length; j++) {
        process.stdout.write(barang[i][j].toString());
        if (j < barang[i].length-1) {
            process.stdout.write(' \t ');
       }
    }
    console.log();
};

