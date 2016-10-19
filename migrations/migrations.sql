-- migrations for users are to be peformed in psql console

DROP DATABASE IF EXISTS hush_howl;
CREATE DATABASE hush_howl;

\c hush_howl

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
);
