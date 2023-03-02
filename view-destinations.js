const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id)
fetch(`./data/${id}.json`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("body").innerHTML += `
            <h1>${data.title}</h1>
            <img src="./img/${data.image}" alt="">
            <p>${data.subtitle}</p>
            <p>${data.text}</p>
            <li>${data.facilities}</li>
        `;
  });
