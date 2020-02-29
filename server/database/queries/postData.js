const connection = require('../config/connection');


const addLocation = (data) => connection.query('INSERT INTO locations (name, category, description, coordinates) values ($1, $2, $3, $4) returning *', [data.name, data.category, data.description, data.coordinates]);

module.exports = addLocation;
