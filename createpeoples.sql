DROP TABLE IF EXISTS famous_people;

CREATE TABLE famous_people (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  birthdate DATE
);

INSERT INTO famous_people (first_name, last_name, birthdate)
VALUES ('Bob', 'Marly', '1989-02-12');
INSERT INTO famous_people (first_name, last_name, birthdate)
VALUES ('Che', 'guevara', 1928-10-14');
INSERT INTO famous_people (first_name, last_name, birthdate)
VALUES ('Fidel', 'Castro', '1929-08-13');
