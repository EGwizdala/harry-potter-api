export const URL = 'https://hp-api.herokuapp.com/api/characters';

export async function getRequest(url) {
    const res = await fetch(url);
    if (res.ok) { 
        return res.json();
    } else {
        throw new Error("Bad response");
    }
};