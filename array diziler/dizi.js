//-----DİZİ TNIMLAMASI------

// let sayilar = [0, 1, 2, 3, 4, 5, "yagmur", 7, 8, 9, "ali"];

// sayilar[sayilar.length - 1] = "mehmet";
// console.log(sayilar[10]);

// let isimler = ["enes", "yagmur", "yunus", "büşra"];
// // isimler[2] = "yakup";
// console.log(isimler);

// let karisikDizi = [1, "yagmur", 5.7, true, null, undefined];
// console.log(karisikDizi[5]);

// let dizi1 = ["yagmur","enes"];
// let dizi2 = new Array("yagmur","enes");

// dizi1[0] = "yagmur";
// dizi1[2] = "enes";

// dizi2[0] = "yagmur";
// dizi2[1] = "enes";

//--FOREACH DONGUSU-----

// let isimler = ["yagmur", "yunus", "büşra", "yakup", "gökçe", "eren"];

// let sayac = 0;
// while (sayac < isimler.length) {
//   console.log(isimler[sayac]);
//   sayac++;
// }

// for (let i = 0; i < isimler.length; i++) {
//   console.log(isimler[i]);
// }

// isimler.forEach(function (isim) {
//   console.log(isim);
// });

//-------DİZİNİN METOTLARI------

let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
// let arabalar2 = ["hundai", "tofaş"];

//-----PUSH METOT (sonuna ekler)
// console.log(arabalar.length);
// arabalar.push("opel");

// console.log(arabalar);

//---UNSHIFT METOT(başına ekler)
// arabalar.unshift("hundai");
// console.log(arabalar);

//---POP METOT(sonunu siler)

// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);

//----SHIFT METOT(dizinin başından siler)

// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

//----SPLİCE METOT
// console.log(arabalar);
// arabalar.splice(2, 0, "hundai");
// console.log(arabalar);
// arabalar.splice(2, 2, "hundai");
// console.log(arabalar);

//---TOSTRİNG METOT(diziyi stringe çevirme)
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);

//----JOİN METOT(aralara simge ekler)
// let stringArabalar = arabalar1.join("*");
// console.log(stringArabalar);

//---CONCAT METOT(iki diziyi birleştirir)
// let birlesmisDizi = arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);

//-----SLİCE METOT
// console.log(arabalar);
// let ayrıDizi = arabalar.slice(2);
// console.log(ayrıDizi);

//---REVERSE METOT(ters cevirmek)
// console.log(arabalar);
// let tersArabalar = arabalar.reverse();
// console.log(tersArabalar);

//-----SPLİT METOT (kendi içinde böler)
// let isimler = "yagmur,enes,ali";
// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);

//---INDEXOF METOT

// let index = arabalar.indexOf("hundai");
// if (index == 0) {
//   console.log("belirtilen eleman vardır");
// } else {
//   console.log("eleman yoktur");
// }
// console.log(index);

//----INCLUDES METOT(eleman varmı yokmu?)

let sonuc = arabalar.includes("porsche");
if (sonuc) {
  console.log("eleman vardır");
} else {
  console.log("eleman yoktur");
}
