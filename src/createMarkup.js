export default function createMarkup(cats) {
    return cats.map(({name,id}) => {
    return  `<option value="${id}" id="${id}">${name}</option>`
    }).join("");
};
