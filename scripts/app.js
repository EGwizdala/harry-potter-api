import { cardButtonRemoveFromFavourites } from './favourites.js'
import { closeModal } from './modalHandlers.js';
import { displayCards } from './cardsDisplay.js';
import { handleButtons } from './buttonHandlers.js';
import { handleNavigation } from './navigation.js';
import { localStorageService } from './localStorageHandlers.js';
import { sortTable } from "./sortTable.js";

function app() {
    handleNavigation();
    handleButtons();
    sortTable();
    displayCards();
    cardButtonRemoveFromFavourites();
    localStorageService();
    closeModal();
};

app();