const button = document.getElementById("submit");
const ad = document.getElementById("ad");
// console.log(button);
// console.log(button.id);
// console.log(button.className);

// const classListesi = button.classList;

// console.log(classListesi);
// button.onclick = function () {
//   alert("Merhaba " + ad.value);
// };

const form2 = document.getElementById("form2");
form2.onsubmit = function () {
  alert("Merhaba " + ad.value);
};
