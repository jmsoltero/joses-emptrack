DROP DATABASE IF EXISTS etracker_db;
CREATE DATABASE etracker_db;

USE etracker_db;

CREATE TABLE department(
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(30)
);

CREATE TABLE role_ (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_title VARCHAR(30),
    role_salary DECIMAL,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

CREATE TABLE employee (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role_(role_id),
    manager_id INT
)
