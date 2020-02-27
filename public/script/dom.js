const viewDetails = document.querySelector('#viewDetails');
const searchInput = document.querySelector('#searchInput');
const mapContainer = document.querySelector('.map__container');
const header = document.querySelector('.header');


const deleteNodeChilds = (node) => {
  while (node.firstChild) node.removeChild(node.firstChild);
};

// Extra coordinates for testing (41.40338,2.17403)

let mapSrc = '31.5129811,34.4464425'; // Here the default coordinates are Gaza Sky Geeks coordinates

const createIframe = () => {
  deleteNodeChilds(mapContainer);
  const src = `https://www.google.com/maps/embed/v1/place?q=${mapSrc.split(',')[0]}%2C%20${mapSrc.split(',')[1]}&key=AIzaSyDDOHAK66Eu_kt42uNaSrmXoWZv8r3d_X8`;
  const iframe = document.createElement('iframe');
  iframe.setAttribute('width', `${window.innerWidth}`);
  iframe.setAttribute('height', '300px');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('style', 'border:0');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', `${src}`);
  mapContainer.appendChild(iframe);
};
(createIframe());

const renderTheData = (location) => {
  const resultsContainer = document.querySelector('.results__container');
  const div = document.createElement('div');
  deleteNodeChilds(resultsContainer);
  const createElements = (description, param2) => {
    const resultsName = document.createElement('h4');
    resultsName.textContent = `${description}: ${location[0][param2]}`;
    div.appendChild(resultsName);
  };

  createElements('Name', 'name');
  createElements('Category', 'category');
  createElements('Description', 'description');
  createElements('Coordinates', 'coordinates');

  resultsContainer.appendChild(div);
};

viewDetails.addEventListener('click', () => {
  fetch(`/locations?location=${searchInput.value}`).then((res) => res.json()).then((result) => {
    mapSrc = result[0].coordinates;
    renderTheData(result);
    createIframe();
  });
});
