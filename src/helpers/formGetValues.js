/* eslint-disable array-callback-return */
export const handleGetJson = (elements) => {
    const json = {};
    Object.keys(elements).map((nameElement) => {
        if (!(Number(nameElement) + 1)) {
            json[nameElement] = elements[nameElement].value;
        }
    });
    return json;
};
