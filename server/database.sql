CREATE DATABASE nameofdb;

CREATE TABLE box_break(
  box_break_id SERIAL PRIMARY KEY,
  break_date DATE NOT NULL,
  break_name VARCHAR(255)
);

INSERT INTO box_break (break_date, break_name) VALUES ('1974-12-22', 'Second break name');