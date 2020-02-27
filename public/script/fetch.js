fetch('/locations')
  .then((res) => res.json())
  .then((locations) => {
    console.log(locations);
  });
