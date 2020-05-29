const button = document.getElementById("submit");
const newPokemon = document.getElementById("newPokemon");
const reveal = document.getElementById("reveal");
const textInput = document.getElementById("textInput");
const main = document.getElementById("pokemon-image-container");
const img = document.getElementById("pokemon-image");
let localData = {};

//Call an id'd Pokemon
async function calculate(id) {
  textInput.value = "";
  const api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  const randNum = Math.floor(Math.random() * 151) + 1;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`);
  localData = await res.json();
  img.src = `${api}${idPadding(randNum)}.png`;
  main.appendChild(img);
}

//Padding for id
function idPadding(id) {
  id = id.toString();
  if (id < 10) {
    id = "00" + id;
  } else if (id < 100) {
    id = "0" + id;
  }
  return id;
}

calculate();

button.addEventListener("click", () => {
  if (textInput.value.toLowerCase() == localData.name) {
    main.classList.add("show");
  }
});

newPokemon.addEventListener("click", () => {
  main.classList.remove("show");

  setTimeout(calculate, 700);
});

reveal.addEventListener("click", () => {
  main.classList.add("show");
  textInput.value = localData.name;
});
