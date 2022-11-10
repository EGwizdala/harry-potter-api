import { dataSet } from './const.js';
import { getRequest, URL } from './api.js';
import { CharacterInterface } from './interfaces.js';

export const character: CharacterInterface = {
  ancestry: "",
  dateOfBirth: "",
  hogwartsStaff: false,
  hogwartsStudent: false,
  house: "",
  image: "",
  name: "",
  wizard: false,
};

const modal = document.getElementById('modal') as HTMLElement;
const modalDataList = document.getElementById('modal-data-list') as HTMLElement;
const modalAvatr = document.getElementById('modal-avatar') as HTMLImageElement;

const modalDataSet = [...dataSet, 'image'];

const addDataToModal = (title:string, content:string, parent: HTMLElement, imgContainer: HTMLImageElement) => {
    if (title === 'image') {
    !!content
      ? (imgContainer.src = content)
      : (imgContainer.src = './img/avatar.jpg');
  } else {
    if (title === 'name') {
      imgContainer.alt = content;
    }
    const listElement = document.createElement('li');
    const titleElement = document.createElement('span');
    const contentElement = document.createElement('span');

    listElement.className = 'modal__list-element';
    titleElement.innerText = `${title.replace(
      /[A-Z][a-z]*/g,
      (str) => ' ' + str.toLowerCase() + ' '
    )}:`;
    listElement.appendChild(titleElement);
    contentElement.innerText = content;
    listElement.appendChild(contentElement);
    parent.appendChild(listElement);
  }
};

const createModalObject = (name:string, value:string, object:any) => {
    object[name] = value;
};

const setModalVisible = (data:any, characterName:string) => {
    modal.classList.toggle('hidden');
    const characterData = data.find(
        (character: any )=> character.name === characterName
    );
    modalDataSet.forEach((element) => {
        createModalObject(element, characterData[element], character);
        addDataToModal(
          element,
          characterData[element],
          modalDataList,
          modalAvatr
        );
    });
};

export const openModal = (e: Event) => {
  const target = e.target as HTMLElement
  if (target.tagName !== 'TD') return;
  const row = target.parentNode as HTMLTableRowElement;
  const characterName = row.cells[0].innerHTML;

  getRequest(URL)
    .then((data) => {
      console.log(data)
      setModalVisible(data, characterName)
    })
    .catch(error => console.log(error.message));
};

const clearModal = () => {
    modalDataList.innerHTML = ''
};

export const closeModal = () => {
  const closeButton = document.getElementById('closeButton') as HTMLButtonElement;
  closeButton.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    clearModal();
});
}


