import {getAllBreeds,getBreedByName,getCatImgByName} from "./cat-api";
import { imgRender, currentCatRender } from "./currentCatRender";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
const selectEl = document.querySelector(".breed-select")
const catInfoEL = document.querySelector(".cat-info");

const loadingAlertEl = document.createElement("span");
loadingAlertEl.classList.add("loader")


selectEl.addEventListener("change", onGetBreeds);
createOptionBreed();

function createOptionBreed() {
    getAllBreeds().then(renderBreedSelect);
};


function renderBreedSelect(cats) {

    const breedOptions = cats.map(cat => ({
        text: cat.name,  
        value: cat.id     
      }));
    
    new SlimSelect({
     select: '#single',
     placeholder: 'Выберите породу',
     data: breedOptions,
    });
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
