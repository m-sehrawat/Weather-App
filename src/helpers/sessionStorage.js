export const getItem = (key) => {

    if (sessionStorage.getItem(key)) {

        return JSON.parse(sessionStorage.getItem(key));

    } else {
        return undefined;
    }
};

export const setItem = (key, data) => {

    return sessionStorage.setItem(key, JSON.stringify(data));
};
