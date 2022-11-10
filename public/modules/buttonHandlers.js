import { URL } from "./api.js";
import { clearTable, drawTable } from "./tableHandlers.js";
import { getRequest } from "./api.js";
import { mainTable, tableBody } from "./const.js";
import { addCardsToFavourites, removeAllCardsFromFavourites } from "./favourites.js";
import { openModal } from "./modalHandlers.js";
export const handleButtons = () => {
    const buttons = document.querySelectorAll('button[name="nav"]');
    const favouritesSection = document.getElementById('favourites-section');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === "students") {
                favouritesSection.classList.add('hidden');
                mainTable.classList.remove('hidden');
                clearTable(tableBody);
                getRequest(`${URL}/students`)
                    .then((data) => drawTable(data, tableBody))
                    .catch(error => console.log(error.message));
            }
            else if (button.id.includes("house")) {
                favouritesSection.classList.add('hidden');
                mainTable.classList.remove('hidden');
                clearTable(tableBody);
                const house = button.id.slice(6);
                getRequest(`${URL}/house/${house}`)
                    .then((data) => { drawTable(data, tableBody); })
                    .catch(error => console.log(error.message));
            }
            else if (button.id === "favourites") {
                mainTable.classList.add('hidden');
                favouritesSection.classList.remove('hidden');
                removeAllCardsFromFavourites();
                addCardsToFavourites();
            }
        });
    });
};
tableBody.addEventListener('click', openModal);
