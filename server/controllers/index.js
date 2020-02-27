const express = require('express');
const getData = require('../database/queries/getData');
const addLocation = require('../database/queries/postData');


const router = express.Router();
router.post('/locations', (req, res) => {
  addLocation(req.body).then(() => res.redirect('/')).catch(console.error);
});

router.get('/locations', (req, res) => {
  getData()
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.error(err));
});
module.exports = router;
