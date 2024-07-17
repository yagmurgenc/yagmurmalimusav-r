//-------DERS ORTALAMASI BULMA-------------------
//vize1 %30 , vize2 %30, final %40

/*
let vize1 = Number(prompt("Vize 1 notunuzu giriniz.:"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz:"));

let final = Number(prompt("Final notunuzu giriniz:"));

let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

if (ortalama >= 60) {
  alert("Dersten geçtiniz tebrikler:))");
  console.log("Dersten geçtiniz tebrikler:))");
} else {
  alert("Kaldınız, geçmiş olsun:))");
  console.log("Kaldınız, geçmiş olsun:))");
  75;
}
  */

/*
let secilenYol = prompt("lütfen gitmek istediğiniz yolu seçiniz.");

if (secilenYol === 1) {
  alert("secilenYol" + "secilenYol" + "yoldur.");
} else if (secilenYol == 2) {
  alert("secilenYol" + "secilenYol" + "yoldur.");
} else if (secilenYol == 3) {
  alert("secilenYol" + "secilenYol" + "yoldur.");
} else {
  alert("lütfen geçerli bir yol seçiniz!!");
}
  */

//------ÇOKLU İF KULLANIMI---------
/*
Ad: boş geçilemez
TCKN: 11 karekter 
*/

/*
let ad = prompt("isminizi giriniz:");
let tckn = prompt("TCKN giriniz:");

kontrolEt2(ad, tckn);

function kontrolEt1(ad, tckn) {
  if (ad != "") {
    if (tckn.length == 11) {
      console.log("isim ve tckn problemsiz girildi");
    } else {
      console.log("lütfen tc nizi 11 karakter olarak giriniz");
    }
  } else {
    console.log("lütfen isim alnını boş bırakmayın");
  }
}

function kontrolEt2(ad, tckn) {
  if (ad == "") {
    console.log("lütfen isim alnını boş bırakmayın");
    return;
  }
  if (tckn.length != 11) {
    console.log("lütfen tc nizi 11 karakter olarak giriniz");
    return;
  }

  console.log("isim ve tckn problemsiz girildi");
}
*/

//------BENZİN İSTASYONU-----

/*
1-Dizel : 24.53
2-Benzin :22.25
3-LPG: 11.1


Gelen müşteriden alınacak;
1- Yakıt tipi
2-Yüklenecek yakıt kütlesi
*/

/*
let Dizel = 24.53,
  Benzin = 22.25,
  LPG = 11.1;
const yeniSatir = "/r\n";

const yakıtMetni =
  " 1-Dizel" +
  yeniSatir +
  "2-Benzin" +
  yeniSatir +
  "3-LPG" +
  yeniSatir +
  "Yajıt türünüzü seçiniz";

let yakıtTipi = prompt(yakıtMetni);
let yakıtLitresi = Number(prompt("yakıt litresini giriniz"));
let bakiye = Number(prompt("bakiyenizi giriniz"));

if (yakıtTipi == "1") {
  let odenecekTutar = Dizel * yakıtLitresi;
  if (odenecekTutar < bakiye) {
    bakiye = bakiye - odenecekTutar;
    alert(
      "yakıt alma işlei başarılı" +
        yeniSatir +
        "alan bakiye: " +
        (bakiye - odenecekTutar)
    );
  } else {
    alert(
      "bakiyeniz yeterli değildir" +
        yeniSatir +
        "Ödenecek tutar:" +
        odenecekTutar +
        yeniSatir +
        "Bakiye : " +
        odenecekTutar +
        yeniSatir +
        "Eksik tutar : + "(odenecekTutar - bakiye)
    );
  }
} else if (yakıtTipi == "2") {
    let odenecekTutar = Benzin * yakıtLitresi;
    if (odenecekTutar < bakiye) {
        bakiye = bakiye - odenecekTutar;
        alert(
          "yakıt alma işlei başarılı" +
            yeniSatir +
            "alan bakiye: " +
            (bakiye - odenecekTutar)
        );
      } else {
        alert(
          "bakiyeniz yeterli değildir" +
            yeniSatir +
            "Ödenecek tutar:" +
            odenecekTutar +
            yeniSatir +
            "Bakiye : " +
            odenecekTutar +
            yeniSatir +
            "Eksik tutar : + "(odenecekTutar - bakiye)
        );
    } else if (yakıtTipi == "3") {
    
} else {
  alert("lütfen geçerli bir yakıt ttü seçiniz.");
}
}
*/
