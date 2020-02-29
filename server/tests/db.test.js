const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const getData = require('../database/queries/getData');
const addLocation = require('../database/queries/postData');

beforeAll(() => dbBuild());

afterAll(() => connection.end());

test('test getData query return the expected', () => getData()
  .then((data) => {
    const actual = data.rows[0];
    const expected = {
      id: 1, name: 'Gaza Sky Geeks', category: 'Workspace', description: 'A place where you can work freely', coordinates: '31.5129811,34.4464425',
    };
    expect(actual).toEqual(expected);
  }));

test('test post data', () => {
  const data = {
    name: 'Palace', category: 'Place', description: 'A place where ', coordinates: '31.5129811,34.4464425',
  };
  return addLocation(data).then((res) => {
    const actual = res.rows[0];
    const expected = {
      id: 5, name: 'Palace', category: 'Place', description: 'A place where ', coordinates: '31.5129811,34.4464425',
    };
    expect(actual).toEqual(expected);
  });
});
