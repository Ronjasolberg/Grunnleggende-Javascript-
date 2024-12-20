//hent knappen og body-elementet 
const themeSwitcher = document.getElementById("theme-switcher"); 
const body = document.body; 

//Funksjoner som bytter tema 
function toggleTheme () {
    //Bytt mellom lys og mørk tema 
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
}

//Event listener på knappen 
themeSwitcher.addEventListener("click", toggleTheme);

//Henter knappen for containeren og kortet 
const showCardButton = document.querySelector("#show-card"); 
const cardContainer = document.querySelector("#card-container"); 

//funksjon for å lage kortet dynamisk 
function createCard() {
    //lager et kort-element 
    const card = document.createElement("div"); 
    card.classList.add("card"); //Legger til klassen "card" for styling 

    //Lager et bilde-element og setter src 
    const img = document.createElement("img"); 
    img.src = "https://cdn.britannica.com/88/588-050-07CF1220/flamingo.jpg"; 
    img.alt = "Flamingo"; 

    //Lager et tittel-element 
    const title = document.createElement("h2"); 
    title.textContent = "Flamingo"; 

    //Lager et beskrivelses-element 
    const description = document.createElement("p"); 
    description.textContent = "Hello"; 

    //Legger til bildene og tekstene til kortet 
    card.appendChild(img);
    card.appendChild(title); 
    card.appendChild(description); 

    //Legger kortet til i containeren 
    cardContainer.appendChild(card); 
}

//Hendelsesbehandling for knappen 
showCardButton.addEventListener("click", createCard); 