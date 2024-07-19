//Selectors (Seçiciler) - Style Özellikleri

//classname , id , tag name

//getElementById : id ye göre elementi yakalar
//getElementByClassName : class ismine göre yakalar.
//getElementByTagName : etiket ismine göre yakalar.

// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// const classListesi = button.classList[3];
// const classListesi = button.classList[2];

// const classListesi = button.classList;

// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);

// button.innerHTML="<b>Todo Ekleyin</b>";

// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);

// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]);

// const todoList = document.getElementsByTagName("li");
// console.log(todoList);

// getElementById - getElementByClassName - getElementByTagName

//querySelector - querySelectorAll

// const clearButton = document.querySelector("#todoClearButton");
// console.log(clearButton);

// console.log(document.getElementById("todoClearButton")));

// const todoList = document.querySelector(".list-group");
// console.log(todoList);

//odd ve even
// const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"));

// todoList.forEach(function(todo){
//     todo.style.backgroundColor = "lightgrey";
// })

// console.log(todoList);

//----EVENT (OLAY)----

// const clearButton = document.querySelector("#todoClearButton");
// clearButton.addEventListener("click", changeTitle);

// function changeTitle(e) {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.textContent);
//   console.log(e.target.className);
// }

//-----MOUSE EVENT----

// document.addEventListener("DOMContentLoaded", run);
// function run() {
//   console.log("Sayfa Yüklendi");
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];
// const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseover", run);
// cardBody.addEventListener("mouseout", run);
// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);
// function run(e) {
//   console.log(e.type);
// }

//-------KLAVYE EVENTLARI---------
//keypress:harf ve sayılarda tetiklenir
//keydown: hepsinde çalışır
//keyup: tuştan elini kaldırdığında çalışır.

// document.addEventListener("keydown", run);

// function run(e) {
//   console.log(e.keyCode);
//   if (e.keyCode == 116) {
//     alert("Sayfa yenileme engellendi");
//   }
//   e.preventDefault();
// }

// const cardTitle = document.querySelectorAll(".card-title")[0];
// const input = document.querySelector("#todoName");

// input.addEventListener("keyup", run);

// function run(e) {
//   cardTitle.textContent = e.target.value;
// }

//----İNPUT EVENTLARI----

// const todo = document.querySelector("#todoName");

// todo.addEventListener("focus", run);
// todo.addEventListener("blur", run);
// todo.addEventListener("copy", run);
// todo.addEventListener("paste", run);
// todo.addEventListener("cut", run);
// todo.addEventListener("select", run);
// function run(e) {
//   console.log(e.type);
// }
