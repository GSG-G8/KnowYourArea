const viewDetails = document.querySelector('#viewDetails');
const searchInput = document.querySelector('#searchInput');

// Extra coordinates for testing (41.40338, 2.17403)
let mapSrc = '31.5129811,34.4464425';
const src = `https://www.google.com/maps/embed/v1/place?q=${mapSrc.split(',')[0]}%2C%20${mapSrc.split(',')[1]}&key=AIzaSyDDOHAK66Eu_kt42uNaSrmXoWZv8r3d_X8`;

const iframe = document.createElement('iframe');
iframe.setAttribute('width', `${window.innerWidth}`);
iframe.setAttribute('height', '300px');
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('style', 'border:0');
iframe.setAttribute('allowfullscreen', '');
iframe.setAttribute('src', `${src}`);

document.querySelector('.header').appendChild(iframe);


const renderTheData = (location) => {
  console.log(location);
  const section = document.querySelector('.results__container');
  const div = document.createElement('div');
  const resultsName = document.createElement('h3');
  resultsName.textContent = `Name: ${location[0].name}`;
  div.appendChild(resultsName);

  const resultCategory = document.createElement('h3');
  resultCategory.textContent = `Category: ${location[0].category}`;
  div.appendChild(resultCategory);

  const resultDescription = document.createElement('h3');
  resultDescription.textContent = `Description: ${location[0].description}`;
  div.appendChild(resultDescription);

  const resultCoordinates = document.createElement('h3');
  resultCoordinates.textContent = `Coordinates: ${location[0].coordinates}`;
  div.appendChild(resultCoordinates);

  section.appendChild(div);
};

viewDetails.addEventListener('click', () => {
  fetch(`/locations?location=${searchInput.value}`).then((res) => res.json()).then((result) => {
    mapSrc = result[0].coordinates;
    renderTheData(result);
  });
});
