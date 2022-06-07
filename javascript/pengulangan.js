// #perintah while
// let i = 0;
// while (i < 10) {
//     console.log(`Langkah ke-${i}: Pemrograman JavaScript`);
//     i++
// }


// let data = [10,20,30,40,50];
// let total = 0;
// let isi = 0;
// let i = 0;

// while (i < data.length) {
//     total += data[i];
//     isi += data[i];
//     i++
// }
// console.log(`Jumlah total = ${total}`);
// console.log(isi);

// #perintah do-while
// do {
//     total += data[i];
//     i++;
// } while (i < data.length);

// console.log(`Jumlah total = ${total}`);

// #perintah for
// let data = [10,20,30,40,50];
// let total = 0;

// for (let i = 0; i < data.length; i++) {
//     total += data[i];
// }

// console.log(`Jumlah total = ${total}`);

// #pengulangan bersarang
// #nested-loop
// let barang = [
//     ['PR01', 'Pensil', 6500],
//     ['PR02', 'Spidol', 9000],
//     ['PR03', 'Tinta', 20000],
//     ['PR04', 'rayon', 13000],
// ];

// for (let i = 0; i < barang.length; i++) {
//     for (let j = 0; j < barang.length; j++) {
//         let isi = barang[i][j];
//         // let string = isi ? isi.toString() : '';
//         // console.log(string);
//         process.stdout.write(isi ? isi.toString() : '');
//         if (j < barang[i].length-1) {
//             process.stdout.write('\t');
//         }
//     }
//     console.log();
//     console.log(typeof(barang));
// }
// console.log(barang);

// #perintah for-in
// let data = [10,20,30,40,50];

// for (let indexs in data) {
//     // console.log(indexs);
//     // console.log(`data[${indexs}]`);
//     // console.log(`${data[indexs]}]`);
//     console.log(`data[${indexs}] = ${data[indexs]}`);
// }

// let data = {'one':'satu', 'two':'dua', 'three':'tiga'};

// for (let kunci in data) {
//     console.log(`${kunci} \t: ${data[kunci]}`);
// }

// #perintah for-of
// let data = [10,20,30,40,50];

// for (let elemen of data) {
//         console.log(elemen);
//     }