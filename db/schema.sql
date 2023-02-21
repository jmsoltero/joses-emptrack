DROP DATABASE IF EXISTS etracker_db;
CREATE DATABASE etracker_db;

USE etracker_db;

CREATE TABLE department(
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(30)
);

CREATE TABLE role_ (
    role_id INT PRIMARY KEY,
    role_title VARCHAR(30),
    role_salary DECIMAL,
    role_dept INT,
    FOREIGN KEY (role_dept) REFERENCES department(dept_id)
);

CREATE TABLE employee (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    emp_role INT,
    FOREIGN KEY (emp_role) REFERENCES role_(role_id),
    manager_id INT
)
