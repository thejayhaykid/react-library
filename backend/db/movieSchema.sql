CREATE TABLE movies (
  uid SERIAL PRIMARY KEY,
  title VARCHAR(255),
  original_title VARCHAR(255),
  adult BOOLEAN,
  backdropPath VARCHAR(50),
  budget INT,
  tmdb_id INT UNIQUE,
  imdb_id VARCHAR(25),
  original_language VARCHAR(2),
  overview VARCHAR(255),
  poster_path VARCHAR(50),
  release_date DATE,
  revenue INT,
  runtime INT,
  status VARCHAR(50),
  tagline VARCHAR(255),
  date_created DATE
);

CREATE TABLE genre_key (
    uid SERIAL PRIMARY KEY,
    id INT,
    name VARCHAR(255)
);

CREATE TABLE genres (
    movie_id INT REFERENCES movies(uid),
    genre_id INT REFERENCES genre_key(uid)
);

CREATE TABLE production_companies_keys (
    uid SERIAL PRIMARY KEY,
    id INT,
    logo_path VARCHAR(50),
    name VARCHAR(255),
    origin_country VARCHAR(4)
);

CREATE TABLE prod_company_movie (
    movie_id INT REFERENCES movies(uid),
    prod_comp_id INT REFERENCES production_companies_keys(uid)
);

CREATE TABLE production_country_keys (
    uid SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE prod_country_movie (
    movie_id INT REFERENCES movies(uid),
    prod_country_id INT REFERENCES production_country_keys(uid)
);

CREATE TABLE spoken_language_key (
    uid SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE movie_languages (
    movie_id INT REFERENCES movies(uid),
    language_id INT REFERENCES spoken_language_key(uid)
);