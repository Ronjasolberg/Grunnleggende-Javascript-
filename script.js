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