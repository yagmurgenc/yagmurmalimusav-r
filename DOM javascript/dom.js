//pathname
// console.log(document.location.pathname);
// document.body.style.backgroundColor = "aqua";

/* dom içerisinde oge secimi ve düzenleme islemleri
let title = document.getElementById("title");
title.innerHTML = "Degisen Bilgi";
console.log(title.innerHTML);
let link = document.querySelector("#kodluyoruzLink");
link.innerHTML += " değisti";
link.style.color = "red";
link.classList.add("btn");
*/

let fullName = prompt("Lütfen adınızı giriniz");

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}<small>`;
