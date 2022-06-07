const readline = require('readline-sync');

// #membuat object
// class Segitiga {
//     constructor(a, t) {
//         this.alas = a;
//         this.tinggi = t;
//     }
    
//     luas() {
//         return this.alas * this.tinggi / 2;
//     }
// }

// let a = parseFloat(readline.question('Masukan alas : '));
// let t = parseFloat(readline.question('Masukan tinggi : '));

// let object = new Segitiga(a, t);

// console.log(`object.alas\t: ${object.alas}`);
// console.log(`object.tinggi\t: ${object.tinggi}`);
// console.log(`object.luas\t: ${object.luas()}`);

// #metode statis
// class Segitiga {
//     constructor(a, t) {
//         this.alas = a;
//         this.tinggi = t;
//     }
    
//     luas() {
//         return this.alas * this.tinggi / 2;
//     }
    
//     // #metode statis
//     static buatObject(a, t) {
//         return new Segitiga(a, t);
//     }
// }

// let a = parseFloat(readline.question('Masukan alas : '));
// let t = parseFloat(readline.question('Masukan tinggi : '));

// let object = Segitiga.buatObject(a,t);

// console.log(`object.alas\t: ${object.alas}`);
// console.log(`object.tinggi\t: ${object.tinggi}`);
// console.log(`object.luas\t: ${object.luas()}`);

// class Aritmetika {
//     static tambah(a, b) {
//         return a + b;
//     }
//     static kurang(a, b) {
//         return a - b;
//     }
//     static kali(a, b) {
//         return a * b;
//     }
//     static bagi(a, b) {
//         return a / b;
//     }
//     static sisaBagi(a, b) {
//         return a % b;
//     }
//     static pangkat(a, b) {
//         return a ** b;
//     }
// }

// let a = parseFloat(readline.question('Masukan nilai a : '));
// let b = parseFloat(readline.question('Masukan nilai b : '));

// console.log(`${a} + ${b} \t= ${Aritmetika.tambah(a, b)}`);
// console.log(`${a} - ${b} \t= ${Aritmetika.kurang(a, b)}`);
// console.log(`${a} * ${b} \t= ${Aritmetika.kali(a, b)}`);
// console.log(`${a} / ${b} \t= ${Aritmetika.bagi(a, b)}`);
// console.log(`${a} % ${b} \t= ${Aritmetika.sisaBagi(a, b)}`);
// console.log(`${a} ** ${b} \t= ${Aritmetika.pangkat(a, b)}`);

// #pewarisan : membuat kelas turunan
// class Segitiga {
//     constructor(a, t) {
//         // mendeklarasikan properti
//         this.alas = a;
//         this.tinggi = t;
//     }

//     luas() {
//         return this.alas * this.tinggi / 2;
//     }

//     cetakProperti() {
//         console.log(`alas\t: ${this.alas}`);
//         console.log(`tinggi\t: ${this.tinggi}`);
//     }
// }

// class SegitigaWarna extends Segitiga {
//     constructor(a, t, w) {
//         super(a, t); // memanggil konstruktor kelas segitiga

//         // mendefinisikan properti baru
//         this.warna = w;
//     }

//     cetakProperti() {
//         super.cetakProperti(); // memanggil Segitiga.cetakProperti()
//         console.log(`warna\t: ${this.warna}`);
//     }
// }

// let a = parseFloat(readline.question('Masukan alas : '));
// let t = parseFloat(readline.question('Masukan tinggi : '));

// let object = new SegitigaWarna(a, t, 'merah');
// object.cetakProperti();

// console.log(`luas\t: ${object.luas()}`);

// #penanganan eksepsi
// mendefinisikan kelas eksepsi
class DivisionByZeroError extends Error {
    constructor(msg) {
        super(msg); // memanggil konstruktor kelas error
        this.name = this.constructor.name
        this.message = msg;
    }

    getMessage() {
        return this.message;
    }
}

let a = parseFloat(readline.question('Masukan nilai a : '));
let b = parseFloat(readline.question('Masukan nilai b : '));

try {
    if (b == 0) {
        throw new DivisionByZeroError(
            'Kesalahan : Terjadi pembagian dengan nol'
        );
    }
    let c = a / b;
    console.log(`${a} / ${b} = ${c}`)
} catch (e) {
    console.log(e.getMessage());
}