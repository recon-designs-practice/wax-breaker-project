CREATE DATABASE nameofdb;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255)
);

INSERT INTO users (first_name, last_name) VALUES ('Charlie', 'Daniels');

CREATE TABLE box_break(
  box_break_id SERIAL PRIMARY KEY,
  break_date DATE NOT NULL,
  break_name VARCHAR(255)
);

INSERT INTO box_break (break_date, break_name) VALUES ('1974-12-22', 'Second break name');
