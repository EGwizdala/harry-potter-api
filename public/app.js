import { cardButtonRemoveFromFavourites } from './modules/favourites.js';
import { closeModal } from './modules/modalHandlers.js';
import { displayCards } from './modules/cardsDisplay.js';
import { handleButtons } from './modules/buttonHandlers.js';
import { handleNavigation } from './modules/navigation.js';
import { localStorageService } from './modules/localStorageHandlers.js';
import { sortTable } from "./modules/sortTable.js";
function app() {
    handleNavigation();
    handleButtons();
    sortTable();
    displayCards();
    cardButtonRemoveFromFavourites();
    localStorageService();
    closeModal();
}
;
app();
