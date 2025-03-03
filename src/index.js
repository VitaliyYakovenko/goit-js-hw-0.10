import {getAllBreeds,getBreedByName,getCatImgByName} from "./cat-api";
import createMarkup from "./createMarkup";
import {imgRender, currentCatRender} from "./currentCatRender";
const selectEl = document.querySelector(".breed-select");
const catInfoEL = document.querySelector(".cat-info");

const loadingAlertEl = document.createElement("p");
loadingAlertEl.textContent = 'Loading data, please wait...';

selectEl.addEventListener("change", onGetBreeds);
createOptionBreed();

function createOptionBreed() {
    getAllBreeds().then(render);
};


function render(cats) {
    const markup = createMarkup(cats);
    selectEl.insertAdjacentHTML("beforeend", markup);
};



function onGetBreeds(e) {
    const breedName = e.target.value;
    catInfoEL.innerHTML = "";
    getBreedByName(breedName).then(renderDesk);
    getCatImgByName(breedName).then(renderImg);
    catInfoEL.appendChild(loadingAlertEl);
};

function renderImg(cat) {
    catInfoEL.removeChild(loadingAlertEl);
    const markup = imgRender(cat);
    catInfoEL.insertAdjacentHTML("afterbegin", markup);
};

function renderDesk(cat) {
    const markup = currentCatRender(cat);
    catInfoEL.insertAdjacentHTML("beforeend", markup);
}; 
