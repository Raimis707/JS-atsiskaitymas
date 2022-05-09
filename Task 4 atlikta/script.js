fetch("./cars.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
    console.log(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  let mainContainer = document.getElementById("output");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.className = "list";
    div.innerHTML =
      "Gamintojas: " + data[i].brand + ";" + " Modeliai: " + data[i].models;

    mainContainer.appendChild(div);
  }
}

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
