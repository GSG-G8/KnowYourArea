const router = require('express').Router();
const { getData } = require('../database/queries/getData');
const { getAllData } = require('../database/queries/getData');
const addLocation = require('../database/queries/postData');

router.get('/locations', (req, res) => {
  getAllData()
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.error(err));
});

router.get('/Slocations', (req, res) => {
  getData(req.query.location)
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.error(err));
});

router.post('/locations', (req, res) => {
  addLocation(req.body).then(() => res.redirect('/')).catch(console.error);
});

module.exports = router;
