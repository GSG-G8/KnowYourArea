const viewDetails = document.querySelector('#viewDetails');
const searchInput = document.querySelector('#searchInput');
const mapContainer = document.querySelector('.map__container');
const header = document.querySelector('.header');
const locationsList = document.querySelector('#locations__list');
const resultsContainer = document.querySelector('.results__container');


const deleteNodeChilds = (node) => {
  while (node.firstChild) node.removeChild(node.firstChild);
};

// Extra coordinates for testing (41.40338,2.17403)


const createIframe = (mapSrc) => {
  deleteNodeChilds(mapContainer);
  const src = `https://www.google.com/maps/embed/v1/place?q=${mapSrc.split(',')[0]}%2C%20${mapSrc.split(',')[1]}&key=AIzaSyDDOHAK66Eu_kt42uNaSrmXoWZv8r3d_X8`;
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', `${src}`);
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '350px');
  iframe.setAttribute('title', 'Specific Location Map');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('style', 'border:0');
  iframe.setAttribute('allowfullscreen', '');
  mapContainer.appendChild(iframe);
};
(createIframe('31.5129811,34.4464425')); // Here the default coordinates are Gaza Sky Geeks coordinates

const renderTheData = (location) => {
  deleteNodeChilds(resultsContainer);
  location.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'results__div';
    const createElements = (description, param2) => {
      const resultsName = document.createElement('h4');
      resultsName.textContent = `${description}: ${element[param2]}`;
      resultsName.className = 'Results__heading';
      div.appendChild(resultsName);
    };

    createElements('Name', 'name');
    createElements('Category', 'category');
    createElements('Description', 'description');
    createElements('Coordinates', 'coordinates');

    const viewMapBtn = document.createElement('button');
    viewMapBtn.textContent = 'View Map';
    viewMapBtn.className = 'viewMap__btn';
    viewMapBtn.addEventListener('click', () => {
      createIframe(element.coordinates);
    });
    div.appendChild(viewMapBtn);
    resultsContainer.appendChild(div);
  });
};

const NoResults = () => {
  deleteNodeChilds(resultsContainer);
  const sorryMsg = document.createElement('h3');
  sorryMsg.textContent = 'Sorry but there\'s no results for your search value';
  resultsContainer.appendChild(sorryMsg);
};

viewDetails.addEventListener('click', () => {
  fetch(`/Slocations?location=${searchInput.value}`).then((res) => res.json()).then((result) => {
    if (result.length > 0) {
      renderTheData(result);
      createIframe(result[0].coordinates);
    } else {
      NoResults();
    }
  });
});

searchInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    viewDetails.click();
  }
});

fetch('/locations').then((res) => res.json()).then((result) => {
  result.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.name;
    locationsList.appendChild(option);
  });
}).catch(console.error);
