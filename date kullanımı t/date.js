// let tarih = new Date();
// console.log(tarih);

//----SET METOTLARI----(istediğni degistiriyor)
// console.log(tarih);
// tarih.setHours(15);
// tarih.setDate(24);

// tarih.setHours(tarih.getHours() + 2);
// console.log(tarih);0

//---DEĞER VE REFERANS TİPLERİ-----

// let a = 5;
// let b = a;

// console.log("a :" + a);
// console.log("b :" + b);
// console.log("------------------------");

// b = 10;
// console.log("a :" + a);
// console.log("b :" + b);

// let dizi1 = [1, 2, 3];
// let dizi2 = dizi1;

// if (dizi1 == dizi2) {
//   console.log("esittir");
// } else {
//   console.log("esit degildir");
// }

// console.log(dizi1);
// console.log(dizi2);

let dizi1 = [1, 2, 3];
let dizi2 = dizi1;
let dizi3 = dizi2;

dizi2.push(12);

console.log(dizi1);
console.log(dizi2);
console.log(dizi3);
