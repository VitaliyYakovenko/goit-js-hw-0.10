const catInfoEL = document.querySelector(".cat-info")

export default function renderError() {
    const errorEl = document.createElement("p");
    errorEl.textContent = "Error, please try again!";
    catInfoEL.appendChild(errorEl);
};