BEGIN;

DROP TABLE IF EXISTS locations, nearby CASCADE;

CREATE TABLE locations (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    category varchar(100) NOT NULL,
    description varchar(255),
    coordinates varchar(100)
)

CREATE TABLE nearby (
    id serial PRIMARY KEY,
    location_id integer REFERENCES locations(id) ON UPDATE CASCADE,
    nearby_location varchar(100) NOT NULL,
)

INSERT INTO locations(name, category, description, coordinates) VALUES
('Gaza Sky Geeks', 'Workspace', 'A place where you can work freely', '31.5129811,34.4464425'),
('IUG', 'University', 'Islamic University of Gaza', '31.5129811,34.4464425'),
('AUG', 'University', 'Al-Azhar University of Gaza', '31.5129811,34.4464425'),
('Break', 'Restaurent', 'Break restaurent for food and drinks', '31.5129811,34.4464425')

INSERT INTO nearby(location_id, nearby_location) VALUES
(1,2),
(1,3),
(1,4),
(2,3),
(2,4),
(3,4)

COMMIT;