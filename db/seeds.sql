INSERT INTO department (dept_id, dept_name)
VALUES (1,"Covenant"), (2,"UNSC"), (3,"Sentinels"), (4,"Flood");

INSERT INTO role_ (role_id, role_title, role_salary, dept_id)
VALUE (1,"Spartan", 25000.00, 2), (2,"Elite", 600000.00, 1), (3,"Forerunner", 600000.00, 3), (4,"Infected", 200000.00, 4);

INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id)
VALUE (117, "Master", "Chief", 2, 3), (234, "Thel", "Vadamee", 1, 1), (111, "The", "Didact", 3, 2), (222, "Grave", "Mind", 4, 2);