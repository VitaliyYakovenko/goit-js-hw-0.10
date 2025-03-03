export const currentCatRender = function ({ description, name, temperament }) {  
  return ` 
      <h1>${name}</h1>
      <p>${description}</p>
      <p>${temperament}</p>     
      `;
};

export const imgRender = function (img) {
   const pick = img[0].url;
   return `<img width="400" src="${pick}" alt="cat"/>`
};