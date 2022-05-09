let btn = document.getElementById("submit");
document.addEventListener("submit", func);

function func() {
  let input = document.getElementById("search").value;
  document.getElementById("Svarai").innerHTML =
    "Svarai: " + (input * 2.2046).toFixed(2);
  document.getElementById("Gramai").innerHTML =
    "Gramai: " + (input / 0.001).toFixed(2);
  document.getElementById("Uncijos").innerHTML =
    "Uncijos: " + (input * 35.274).toFixed(2);
  event.preventDefault();
}

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
