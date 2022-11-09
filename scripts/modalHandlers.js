import { dataSet } from './const.js';
import { getRequest, URL } from './api.js';

export const character = {};

const modal = document.getElementById('modal');
const modalDataList = document.getElementById('modal-data-list');
const modalAvatr = document.getElementById('modal-avatar');

const modalDataSet = [...dataSet, 'image'];

const addDataToModal = (title, content, parent, imgContainer) => {
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

const createModalObject = (name, value, object) => {
    object[name] = value;
};

const setModalVisible = (data, characterName) => {
    modal.classList.toggle('hidden');
    const characterData = data.find(
        (character) => character.name === characterName
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

export const openModal = (e) => {
  if (e.target.tagName !== 'TD') return;
  const row = e.target.parentNode;
  const characterName = row.cells[0].innerHTML;

  getRequest(URL)
    .then((data) => { setModalVisible(data, characterName) })
    .catch(error => console.log(error.message));
};

const clearModal = () => {
    modalDataList.innerHTML = ''
};

export const closeModal = () => {
  const closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    clearModal();
});
}


