const connection = require('../config/connection');

const getData = () => connection.query('select * from locations');

module.exports = getData;
