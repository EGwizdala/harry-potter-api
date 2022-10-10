import { character } from './modalHandlers.js';

const addToStorageModalButton = document.getElementById('modal-add');
const removeFromStorageModalButton = document.getElementById('modal-remove');
  
const addDataToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeDataFromStorage = (key) => {
  localStorage.removeItem(key);
};

export const getDataFromStorage = () => {
    let favourites = [];

  for (let [key, value] of Object.entries(localStorage)) {
      favourites.push((JSON.parse(value)))
  }
    return favourites
};


addToStorageModalButton.addEventListener('click', () => {
  addDataToStorage(character.name, character);
  alert(`You added ${character.name} to favourites`);
});

removeFromStorageModalButton.addEventListener('click', () => {
  removeDataFromStorage(character.name);
  alert(`You removed ${character.name} from favourites`);
});


getDataFromStorage();
