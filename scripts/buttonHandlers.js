import { URL } from "./api.js";
import { clearTable, drawTable } from "./tableHandlers.js";
import { getData } from "./api.js";
import { sortTable } from "./sortTable.js";
import { addCardsToFavourites, removeAllCardsFromFavourites } from "./favourites.js";
import { openModal } from "./modalHandlers.js";

const buttons = document.querySelectorAll('button[name="nav"]');
export const mainTable = document.querySelector('table');
export const tableBody = mainTable.querySelector('tbody');
export const tableHeader = mainTable.querySelector('thead');
const favouritesSection = document.getElementById('favourites-section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === "students") {
            favouritesSection.classList.add('hidden');
            mainTable.classList.remove('hidden');
            clearTable(tableBody);
            getData(URL, "students", tableBody, drawTable);
            
        } else if (button.id.includes("house")) {
            favouritesSection.classList.add('hidden');
            mainTable.classList.remove('hidden');
            clearTable(tableBody);
            const house = button.id.slice(6);
            getData(URL, `house/${house}`, tableBody, drawTable);
        } else if (button.id === "favourites") {
            mainTable.classList.add('hidden')
            favouritesSection.classList.remove('hidden');
            removeAllCardsFromFavourites()
            addCardsToFavourites()
        }
    })
});

sortTable(tableHeader);
tableBody.addEventListener('click', openModal);

