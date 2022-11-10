import { character } from './modalHandlers.js';

const addDataToStorage = (key: string, data:{}) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeDataFromStorage = (key:string) => {
  localStorage.removeItem(key);
};

export const getDataFromStorage = () => {
    let favourites = [];

  for (let [key, value] of Object.entries<any>(localStorage)) {
      favourites.push((JSON.parse(value)))
  }
    return favourites
};

export const localStorageService = () => {
  const addToStorageModalButton = document.getElementById('modal-add') as HTMLElement;
  const removeFromStorageModalButton = document.getElementById('modal-remove') as HTMLElement;

  addToStorageModalButton.addEventListener('click', () => {
    addDataToStorage(character.name, character);
    alert(`You added ${character.name} to favourites`);
  });
  
  removeFromStorageModalButton.addEventListener('click', () => {
    removeDataFromStorage(character.name);
    alert(`You removed ${character.name} from favourites`);
  });
  
  getDataFromStorage();
};

