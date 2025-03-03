import axios from "axios";
import renderError from "./error";
const BASE_URL = `https://api.thecatapi.com/v1`
const KEY = `D3kXJobQ8ej8uTCTk5rS3DPAHpPGdzeUs5RQ5lZqCpA5XUImyL25FmuKlrn7Qe8J`;




export function getAllBreeds() {
 return  axios.get(`${BASE_URL}/breeds`, {
    headers: {
      'Authorization': `Bearer ${KEY}`
    }
 }).then(response => response.data)
   .catch(() => {
     renderError();
     return [];
    });
};



export function getCatImgByName(id) {
   return axios.get(`${BASE_URL}/images/search?breed_ids=${id}`, {
    headers: {
      'Authorization': `Bearer ${KEY}`
    }
  }).then(response => response.data)
     .catch(() => {
       renderError();
       return null;
    });
}


export function getBreedByName(id) {
    return axios.get(`${BASE_URL}/breeds/${id}`, {
    headers: {
      'Authorization': `Bearer ${KEY}`
    }
    }).then(response => response.data)
      .catch(() => {
        renderError();
       return null;
    });
};








// const BASE_URL = `https://api.thecatapi.com/v1`
// const KEY = `D3kXJobQ8ej8uTCTk5rS3DPAHpPGdzeUs5RQ5lZqCpA5XUImyL25FmuKlrn7Qe8J`;

// export const getAllBreeds = function () {
//   return fetch(`${BASE_URL}/breeds/?api_key=${KEY}`)
//   .then(resp => resp.json())
//   .catch(error => console.log(error.massage));
// };



// export const getCatImgByName = function (breedId) {
//   return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
//     headers: {
//       'Authorization': `Bearer ${KEY}`,
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(resp => resp.json())
//     .catch(error => console.log(error.massage));
// };



// export const getBreedByName = function (breedId) {
//   return fetch(`${BASE_URL}/breeds/${breedId}`, {
//     headers: {
//       'Authorization': `Bearer ${KEY}`,
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(resp => resp.json())
//     .catch(error => console.log(error.massage))
// };
