import { getDataFromStorage, removeDataFromStorage } from "./localStorageHandlers.js";
import { FavouriteInterface } from "./interfaces.js";

const cards = document.getElementById("cards") as HTMLElement;

const createFavouritesCard = (favourite: FavouriteInterface) => {
    const { name, image } = favourite;
    const cardElement = document.createElement('div');
    const imgContainerElement = document.createElement('div');
    const imageElement = document.createElement('img');
    const nameElement = document.createElement('div');
    const buttonElement = document.createElement('button');

    cardElement.id = name.replace(/\s/g, "");
    cardElement.className = "card";

    imgContainerElement.className = "card__img-container";

    imageElement.dataset.id = "card-avatar";
    imageElement.className = "card__img";
    if (image !== "") {
        imageElement.src = image;
        imageElement.alt = `${name} picture`;
    } else {
        imageElement.src = './img/avatar.jpg';
        imageElement.alt = "default picture";
    }

    nameElement.className = "card__name"
    nameElement.innerHTML = name
    
    buttonElement.type = "button";
    buttonElement.dataset.id = "favourites-remove";
    buttonElement.className = "card__button button";
    buttonElement.innerHTML = "Remove from favourites";

    imgContainerElement.appendChild(imageElement);
    cardElement.appendChild(imgContainerElement);
    cardElement.appendChild(nameElement);
    cardElement.appendChild(buttonElement);
    cards.appendChild(cardElement)
}

export const addCardsToFavourites = () => {
    const favourites = getDataFromStorage();
    favourites.forEach(favourite => {
        createFavouritesCard(favourite)
    });
}

export const removeAllCardsFromFavourites = () => {
    cards.innerHTML = ""
}

export const removeFromStorageHandler = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.dataset.id === "favourites-remove") {
        const parent = target.parentNode as HTMLElement;
        const key = parent.querySelector(".card__name");
        removeDataFromStorage(key!.innerHTML);
        parent.remove()
    }
}

export const cardButtonRemoveFromFavourites = () => {
    cards.addEventListener("click", removeFromStorageHandler)
}
