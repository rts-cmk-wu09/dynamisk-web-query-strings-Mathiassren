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


 
  document.addEventListener("DOMContentLoaded", () => {

    const heartIcons = document.querySelectorAll(".fa-heart");
  
   
    heartIcons.forEach((icon) => {

      const destinationId = icon.closest("figure").getAttribute("id");
  
      const isFavorited = localStorage.getItem(destinationId);
  
  
      if (isFavorited) {
        icon.classList.add("fa-solid");
      }
    });
  });
  
  document.querySelector(".destinationslist").addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-heart")) {

      const destinationId = e.target.closest("figure").getAttribute("id");
  
      if (!localStorage.getItem(destinationId)) {
        localStorage.setItem(destinationId, "favorited");
        e.target.classList.add("fa-solid");
      } else {
        localStorage.removeItem(destinationId);
        e.target.classList.remove("fa-solid");
      }
    }
  });
  
  
