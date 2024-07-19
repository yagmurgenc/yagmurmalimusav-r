// const button = document.getElementById("submit");
// const ad = document.getElementById("ad");
// // console.log(button);
// console.log(button.id);
// console.log(button.className);

// const classListesi = button.classList;

// console.log(classListesi);
// button.onclick = function () {
//   alert("Merhaba " + ad.value);
// };

// const form2 = document.getElementById("form2");
// form2.onsubmit = function (e) {
//   e.preventDefault();
//   alert("Merhaba " + ad.value);
// };

//---LOCAL STORAGE KULLANIMI---
//Deger ekleme
localStorage.setItem("motion1", "Push up");
localStorage.setItem("motion2", "Barfix");
localStorage.setItem("motion3", "Burpee");
localStorage.setItem("motion4", "Squat");

//Degeri almak
// let value = localStorage.getItem("motion1");
// console.log(value);

//Deger silmek
localStorage.removeItem("motion4");

//Tümünü temizle
// localStorage.clear();
// localStorage.clear();
let motions = ["Push up", "Barfix", "Burpee", "Squat", "Chin Up"];

localStorage.setItem("motions", JSON.stringify(motions));

let value = JSON.parse(localStorage.getItem("motions"));

value.forEach(function (motion) {
  console.log(motion);
});
