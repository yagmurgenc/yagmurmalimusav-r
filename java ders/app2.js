// function selamVer() {
//   var selam = "herkese selam";
//   if (true) {
//     var b = 10;
//     console.log(b);
//   }

//   console.log(selam);
// }
// selamVer();

// var a = 5;
// var a = 10;
// console.log(a);

// if (true) {
//   let a = 5;
//   let b = 10;

//   console.log(a);
// }

// const a = 10;

// console.log(a);

// const user = {
//   username: "yagmur",
//   password: "236",
// };
// console.log(user);
//--------------VERI TOIPLERI----------
// 1-String (harfler için kullanılır tırnak içinde.)
// 2-Number(sadece sayılar için)
// 3-Boolean(true ve false den oluşur)
// 4-null(içine değer ataması yapmadığımız boş)
// 5-undefined(tanımlanmamıs kendısını olusturup deger ataması yapılmamıs)
// 6-Object(gelişmiş veri tipi)
// 7-function

//-----------STRING ORNEK----------
// let isim = "yagmur 21 yasındadır.";
// console.log(isim);
// console.log(typeof isim);

//---------NUMBER ORNEK---------
// let sayi1 = 10.7;
// let sayi2 = 5.6;

// console.log(sayi1 + sayi2);
// console.log(typeof sayi1);

//Yaşınız: 21
// let stringDegisken = "yaşınız:;";
// let yas = 21;
// console.log(stringDegisken + yas);

//---------BOOLEAN ORNEK---------
// console.log(5 > 8);
// let a = 3;
// let b = 12;

// let sonuc = a + b;
// console.log(sonuc < 10);

//-----------NULL ÖRNEK-------
// let a = null;
// a = 27;
// console.log(a);
//----------UNDEFINED ORNEK--------
// let a;
// console.log(typeof a);

//----------OBJECT--------
// let insan = {
//   isim: "yagmur",
//   soyisim: "genc",
//   yas: 21,
// };
// console.log(insan);

// let rakamlar = [1, 2, 3, 4, 5];
// console.log(typeof rakamlar);

//--------FUNSCTION ORNEK-------
// let func = function () {
//   console.log("merhaba");
// };
// func();
// console.log(typeof func);

//---------MANTIKSAL OPERATORLER------
/*
&& : ve (bir tanesi bile yanlıs olsa hepsi yanlıs)
|| : veya(bir onemı yok ikisi doğru ve biri doru olabılır)
! : degıl (zıttını alır doğruysa yanlış yapar)
*/
// let yas = 20;
// let para = 3400;
// let saglıklımı = false;
// let haksayısı = 3;

//console.log(yas > 18 && para > 3000 && saglıklımı == true); (bir tanesi yanlıs olunca hepsi yanlıs)

// console.log((yas > 18 && para > 3000) || saglıklımı == true);

// console.log(!(5 > 3));

// console.log((haksayısı > 1 && para > 3000) || (yas > 18 && saglıklımı));

//---------------------------------------------------------------------------

//let yas = 23;
//console.log(yas != 23); ünlem olduğu için eşit değildir anlamı oldu

// console.log(12 <= 12);( 12-12 den küçükse veya eşitse)
//--------------------------------------------------------------------------

/*
--------DIYALOG KUTULARI-----
-Alert(yukarıdan uyarı verir)
-Promot (deger donduruyor)
-Confırm
*/

//alert("yasınız dogru değil");
let isim = prompt("isminizi giriniz:");
let yas = prompt("yasınızı giriniz:");
let cinsiyet = prompt("cinsiyetinizi girini(e-k)");
console.log(cinsiyet);

// console.log("isminiz: " + isim);
// console.log("yasınız: " + yas);

// let sonuc = confirm("silmek istediğinize emin misiniz ?"); (kullancıı onayı alınır)
// console.log(sonuc);

//------------------------------------------------------
//-----------KOŞUL YAPILARI-------

// let not = 65;

// if (not > 50) {
//   console.log("Geçtiniz, notunuz" + not);
// } else {
//   console.log("Kaldınız, noptunuz" + not);
// }

if (cinsiyet == "erkek") {
  if (yas <= 20) {
    console.log("sizi kabul ediyoruz");
  } else {
    console.log("sizi kabul etmiyoruz");
  }
  console.log(isim + " sen erkeksin");
} else if (cinsiyet == "kadın") {
  if (yas <= 25) {
    console.log("sizi kabul ediyoruz");
  } else {
    console.log("sizi kabul etmiyoruz");
  }
  console.log(isim + "sen kadınsın");
} else {
  console.log(isim + "sen çiçeksin");
}
