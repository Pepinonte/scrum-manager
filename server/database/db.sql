--creating the database
CREATE DATABASE scrummy;

--using the database
use scrummy;

--creating the table
CREATE TABLE partie(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL
);

--showing the table
SHOW TABLES;

--describe the table
DESCRIBE partie;
