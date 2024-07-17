/*
let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

switch (sayi) {
  case "1":
    console.log("Girilen sayi 1'dir");
    break;

  case "2":
    console.log("Girilen sayi 2'dir.");
    break;

  case "3":
    console.log("Girilen sayi 3'tür.");
    break;

  case "4":
    console.log("Girilen sayi 4'tür.");
    break;

  case "5":
    console.log("Girilen sayi 5'tir.");
    break;

  default:
    console.log("Girilen sayı 1 ile 5 arasında olmalıdır.");
    break;
}
*/
/*
let yeniSatir = "\r\n";
let metin =
  "1-Pazartesi" +
  yeniSatir +
  2 -
  "Salı" +
  yeniSatir +
  3 -
  "Çarşamba" +
  yeniSatir +
  4 -
  "Perşembe" +
  yeniSatir +
  5 -
  "Cuma" +
  yeniSatir +
  6 -
  "Cumartesi" +
  yeniSatir +
  7 -
  "Pazar" +
  yeniSatir +
  "Lütfen bir seçimi yapınız";

let deger = prompt(metin);
switch (deger) {
  case "1":
    console.log("Pazartesi Günü");
    break;
  case "2":
    console.log("Salı günü");
    break;
  case "3":
    console.log("Çarşamba günü");
    break;
  case "4":
    console.log("Perşembe günü");
    break;
  case "5":
    console.log("Cuma günü");
    break;
  case "6":
    console.log("Cumartesi günü");
    break;
  case "7":
    console.log("Pazar günü");
    break;
  default:
    console.log("Lütfen geçerli bir değer giriniz");
}
*/

/*
1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış
*/
let yeniSatir = "\r\n";
let bakiye = 1000;

let metin =
  "1-Bakiye Görüntüleme" +
  yeniSatir +
  "2-Para Çekme" +
  yeniSatir +
  "3-Para Yatırma" +
  yeniSatir +
  "4-Çıkış" +
  yeniSatir +
  "Lütfen bir değer seçiniz";

//alert(metin);
let secim = prompt(metin);
switch (secim) {
  case "1":
    alert("Bakiyeniz :" + bakiye);
    break;

  case "2":
    let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
    if (cekilecekTutar < bakiye) {
      bakiye = bakiye - cekilecekTutar;
      alert("Kalan bakiye :" + bakiye);
    } else {
      alert(
        "Bakiyenizden fazla çekemezsiniz!" +
          yeniSatir +
          "Bakiyeniz : " +
          bakiye +
          " " +
          "Çekilecek Tutar:" +
          cekilecekTutar
      );
    }
    break;
  case "3":
    let yatırılacakTutar = Number(prompt("Yatırılacak tutarı giriniz:"));
    bakiye = bakiye + yatırılacakTutar;
    alert("Güncel bakiyeniz:" + bakiye);
    break;
  case "4":
    alert("Sistemden çıkış yapılmıştır..");
    break;

  default:
    alert("Lütfen 1- 4 arasında değer giriniz");
    break;
}
