export const getItem = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return undefined;
    }
}

export const setItem = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
}