DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(33) NOT NULL, 
    last_name varchar(33) NOT NULL, 
    title varchar(33) NOT NULL,
    manager varchar(33) NOT NULL 
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(33) NOT NULL,
    department varchar(33) NOT NULL, 
    salary INT NOT NULL 
);

CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name varchar(33) NOT NULL 
);