// Const variabel med navnet destinationslist som selektere klassen destinationslist og udskriver dataen deri.
const destinationslist = document.querySelector(".destinationslist");
// Tjekker om dataen bliver udskrevet korrekt
console.log(destinationslist);

// Fetch, henter data fra en json fil. I dette tilfælde destinations.json

fetch("./data/destinations.json")
  .then((response) => response.json())
  .then((data) => {
    // Tjekker om dataen fra destinations.json array bliver udskrevet.
    console.log(data);
    // Løkke som som bruger forEach metoden til at iterere/gentage over hvert element i en arry kaldet 'dataDestinations''
    // for hvert element i arrayet, eksekvere løkken en funktion der tager det aktuelle element som argument.
    // data.destinations mappen data, hvorefter arrayet destinations bliver hentet i json filen.
    // derefter 
    data.destinations.forEach((destination) => {
      destinationslist.innerHTML += `
            <figure id="${destination.id}">
            <img src="./img/${destination.image}" alt="">
            <div>
            <span><i class="fa-regular fa-heart"></i></span>
            <a href="/destination.html?id=${destination.id}">See More</a>
            </div>
            </figure>
            `;
    });
  });
