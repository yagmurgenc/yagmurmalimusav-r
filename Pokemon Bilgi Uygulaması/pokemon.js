const form = document.querySelector("#pokemonForm");
const pokemonName = document.querySelector("#pokemonName");
const pokemonType = document.querySelector("#pokemonType");
const pokemonList = document.querySelector(".list-group");
const clearButton = document.querySelector("#clearButton");

let pokemons = [];
getPokemonsList(); // pokemon listesi aldik

form.addEventListener("submit", addPokemonToList); // if you click on submit ==> go to addPokemonToList function

function addPokemonToList() {
  const name = pokemonName.value.trim(); // pokemon isim aldik
  const type = pokemonType.value.trim();

  if (name == null || name == "") {
    showAlert("warning", "Lütfen boş bırakmayınız!");
  } else {
    pokemons.push({ name: name, type: type }); // pokemon array'a ekliyoruz
    localStorage.setItem("pokemons", JSON.stringify(pokemons)); // tekrar localstorage'e kayed ediyoruz
    getPokemonsList();
  }
}

function getPokemonsList() {
  $(pokemonList).html(""); // pokemon list-group html kisim sifirliyoriuuz
  pokemons = localStorage.getItem("pokemons") || "[]";

  pokemons = JSON.parse(pokemons); // array'e convert ediyor
  if (pokemons.length > 0) {
    pokemons.forEach((pokemon) => {
      // loop her pokemon icin
      $(pokemonList).append(`${pokemon.name} (${pokemon.type}) <br>`); // list-group a html element ekliyor
    });
  }
}
