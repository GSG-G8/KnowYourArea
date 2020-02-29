BEGIN;

DROP TABLE IF EXISTS locations, nearby CASCADE;

CREATE TABLE locations (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    category varchar(100) NOT NULL,
    description varchar(255),
    coordinates varchar(100)
);

INSERT INTO locations(name, category, description, coordinates) VALUES
('Gaza Sky Geeks', 'Workspace', 'A place where you can work freely', '31.5129811,34.4464425'),
('IUG', 'University', 'Islamic University of Gaza', '31.5144026,34.4415064'),
('AUG', 'University', 'Al-Azhar University of Gaza', '31.5145256,34.4426649'),
('Loqma', 'Restaurent', 'Loqma restaurent for food and drinks', '31.5123041,34.4406898'),
('Capital Mall', 'Mall', 'Capital Mall at Gaza city', '31.5160776,34.4504757'),
('Madrid', 'City', 'City of Madrid capital of Spain', '40.4378698,-3.5394512'),
('Santiago Bernabéu', 'Stadium', 'Estadio Santiago Bernabéu is Real Madrid Fc Stadium', '40.4531194,-3.6872502'),
('Barcelona', 'City', 'City of Barcelona', '41.3947688,2.2188081'),
('Camp Nou', 'Stadium', 'Fc Barcelona Stadium', '41.380896,2.1250085');


COMMIT;
