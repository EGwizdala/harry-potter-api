export const URL = 'https://hp-api.herokuapp.com/api/characters';

export async function getRequest(url) {
    const res = await fetch(url);
    if (res.ok) { 
        return res.json();
    } else {
        throw new Error("Bad response");
    }
  }
  
export async function getData(url, characters, tableBody, callback) {
    try {
        const data = await getRequest(`${url}/${characters}`);
      callback(data, tableBody)
    } catch(e) {
        console.log(e);
    }
}

export async function getModalData(url, characterName, callback) {
    try {
        const data = await getRequest(url);
      callback(data, characterName)
    } catch(e) {
        console.log(e);
    }
}

  