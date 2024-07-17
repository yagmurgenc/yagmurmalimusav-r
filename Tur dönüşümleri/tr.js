/*
-------TÜR DONUSUMLERI-------
strings, numbers, booleans, undefined, and null.
object, funvtıon
*/

//string verisini number verisine dönüstürme

// let a = 5;
// let b = Number("10");
// console.log(a + b);

// let c = Number(b);
// console.log(typeof c);
// console.log(a + c);

/*
let a = 8;
let b = parseInt("12");
console.log(a + b);
*/

//NUMBER TIPINDEN STRINGE DONUSTURMEK

// let x = String(55);

// let x = (55).toString();
// console.log(typeof x);
// console.log(x);

// let sonuc = String(true);
// console.log(typeof sonuc);
// console.log(sonuc);

/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

// for (let i = 0; i <= 10; i = i + 2) { (çift şeklinde gitti)
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     console.log("cicek");
//   } else {
//     console.log("böcek");
//   }
// }

// let toplam = 0;
// for (let i = 50; i >= 1; i--) {
//   toplam = toplam + i;
//   console.log(i);
// }
// console.log("Toplam:", toplam);

// let sayac = 1;
// while (sayac <= 10) {
//   console.log(sayac);
//   sayac++;
// }

// let sayac = 0;
// while (sayac <= 10) {
//   if (sayac % 2 == 0) {
//     console.log(sayac);
//   }
//   sayac++;
// }

// let sayac = 1;
// while (true) {
//   console.log(sayac);
//   if (sayac == 7) {
//     break;
//   }
//   sayac++;
// }

// let sayac = 1;
// do {
//   console.log(sayac);
//   sayac++;
// } while (sayac <= 10);

// let yas=23;

// do {
//     console.log("ehliyeti alabilirsiniz");

// } while (yas>=25);

// let sayac = 1;
// let toplam = 0;
// do {
//   if (sayac % 2 == 1) {
//     toplam += sayac;
//   }
//   sayac++;
// } while (sayac <= 20);
// console.log("Toplam:", toplam);

//-----break-contınue----
// let sayac = 1;
// while (sayac <= 10) {
//   console.log(sayac);
//   if (sayac == 8) {
//     break;
//   }
//   sayac++;
// }

// //?Continue
// let sayac = 0;
// while (sayac <= 10) {
//   sayac++;
//   if (sayac > 10) {
//     break;
//   }

//   if (sayac == 8) {
//     continue;
//   }
//   console.log(sayac);
// }

//---------ÇARPIM TABLOSU----------

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//   }
//   console.log("------------------");
// }

//----ASAL SAYI BULMA UYG.-----
/*
let sayi = Number(prompt("Lütfen bir sayı giriniz:"));
let sonuc = true;
for (let i = 2; i <= Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    sonuc = false;
    break;
  }
}
if (sonuc) {
  alert(sayi + "asaldır");
} else {
  alert(sayi + "asal değildir");
  7;
}
*/
//--------FAKTÖRİYEL HESAPLAMA---------------

// let sayi = Number(prompt("Bir sayı giriniz"));
// let ÇARPIM = 1;
// for (let i = 1; i <= sayi; i++) {
//   ÇARPIM = ÇARPIM * i;
// }
// alert("Sonuc:" + ÇARPIM);
