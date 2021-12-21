DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30) NOT NULL, 
    last_name varchar(30) NOT NULL, 
    role_id INT NOT NULL,
    manager_id INT 
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(30) NOT NULL,
    department_id INT NOT NULL, 
    salary DECIMAL NOT NULL 
);

CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name varchar(30) NOT NULL 
);


