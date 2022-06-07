// let a = new Number(9);
// let b = new String('JavaScript');
// let c = new Array(20,30,40);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// console.log(a instanceof Number);
// console.log(a instanceof Object);

// #membuat tipe object
// function Segitiga(a, t) {
//     this.alas = a;
//     this.tinggi = t;
// }

// Segitiga.prototype.luas = function () {
//     return this.alas * this.tinggi / 2;
// }

// let object = new Segitiga(4, 5);
// #atau
let object = {
    alas : 4,
    tinggi : 5,
    luas : function () {
        return this.alas * this.tinggi / 2;
    }
};

console.log('Sebelum nilai properti diubah');
console.log(`object.alas\t: ${object.alas}`);
console.log(`object.tinggi\t: ${object.tinggi}`);
console.log(`object.luas\t: ${object.luas()}`);

object.alas = 10;
object.tinggi = 8;

console.log('Sebelum nilai properti diubah');
console.log(`object.alas\t: ${object.alas}`);
console.log(`object.tinggi\t: ${object.tinggi}`);
console.log(`object.luas\t: ${object.luas()}`);

let luasSegitiga = object.luas();

