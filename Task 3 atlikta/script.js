const users = document.getElementById("btn");
users.addEventListener("click", () => {
  getUser();
  myFunction();
});
async function getUser() {
  fetch("https://api.github.com/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })

    .then((data) => {
      appendData(data);
    });
}
function appendData(data) {
  let mainContainer = document.getElementById("list");
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.className = "list";
    li.innerHTML =
      "Avatar: " + data[i].avatar_url + ";" + " Login: " + data[i].login;

    mainContainer.appendChild(li);
  }
}
function myFunction() {
  var x = document.getElementById("message");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
