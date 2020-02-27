const connection = require('../config/connection');

const getData = (location = 'gaza') => connection.query('select * from locations where name ilike $1', [`%${location}%`]);

module.exports = { getData };