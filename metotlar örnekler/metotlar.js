//ARMSTRONG ORNEK-----

// let sayi = prompt("Sayı giriniz");
// let toplam = 0;
// for (let i = 0; i < sayi.length; i++) {
//   let rakam = sayi.charAt(i);
//   toplam += rakam * rakam * rakam;
// }
// if (Number(sayi) == toplam) {
//   alert("Armstrong sayısıdır.");
// } else {
//   alert("Armstrong sayısı değildir.");
// }

//------METOTLAR-----
//--1-PARAMETRESİZ--
// function yazdir() {
//   console.log("yagmur");
// }

// yazdir();

// function topla() {
//   console.log(5 + 7);

// }
// topla();

//----2-PARAMETRELİ METOTLAR-----

// function yazdir(isim, soyisim) {
//   console.log(isim + " " + soyisim);
// }
// yazdir("yagmur", "genc");

// cube(6);
// cube(4);
// function cube(sayi) {
//   console.log(sayi * sayi * sayi);
// }

// let yas = Number(prompt("Yaşınızı giriniz:"));

// function kontrolEt(yas) {
//   if (yas > 18) {
//     console.log("Ehliyeti alabilirsiniz");
//   } else {
//     console.log("Ehliyeti alamazsınız:");
//   }
// }
// kontrolEt(yas);

//-----GERİYE DEĞER DONDURME-----return

// let donenDeger = cube(2);
// kareAl(donenDeger);

// function kareAl(sayi) {
//   let sonuc = sayi * sayi;
//   console.log(sonuc);
// }

// function cube(sayi) {
//   let sonuc = sayi * sayi * sayi;
//   return sonuc;
// }

//Kelime sayısı bulma uyg--------
let metin = "Şuanda İstanbul'da javascript öğreniyorum";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
alert("Harf Sayısı:" + sonuc);

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLowerCase() === harf) {
      toplam += 1;
    }
  }
  return toplam;
}
