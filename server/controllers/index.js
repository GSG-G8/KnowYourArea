const router = require('express').Router();
const getData = require('../database/queries/getData');
const addLocation = require('../database/queries/postData');


router.post('/locations', (req, res) => {
  addLocation(req.body).then(() => res.redirect('/')).catch(console.error);
});

router.get('/locations', (req, res) => {
  console.log(req.query);
  getData(req.query.location)
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.error(err));
});
module.exports = router;
