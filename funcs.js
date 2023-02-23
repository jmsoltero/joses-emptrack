const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
//const db = require('.');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usmc2020',
    database: 'etracker_db'
});

const initQuest = {
    type: 'list',
    name: 'init',
    message: 'What would you like to do? 😁',
    choices: [
        'view all employees',
        'add employee',
        'delete employee',
        'update employee role',
        'view all roles',
        'add role',
        'view all departments',
        'add department',
        'quit'
    ]
};

const init = () => {
    inquirer
    .prompt(initQuest)
    .then((chose) => {
        switch (chose.init) {
            case 'view all employees': 
                viewEmps();
                break;
            case 'add employee':
                addEmployee();
                break;
            case 'delete employee':
                    delEmp();
                    break;
            case 'update employee role':
                updateEmpRole();
                break;
            case 'view all roles':
                viewRoles();
                break;
            case 'add role':
                addRole();
                break;
            case 'view all departments':
                viewDepts();
                break;
            case 'add department':
                addDept();
                break;
            default:
                quit();
        }
    })
    }



const viewEmps = () => {
    let query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's id number?",
                name: "empId"

            },
            {
                type: 'input',
                message: 'whats the first name of the employee?',
                name: 'empFirstName'
            },
            {
                type: 'input',
                message: 'whats the last name of employee?',
                name: 'empLastName'
            },
            {
                type: "input",
                message: "What is the employee's role id number?",
                name: "empRole"
              },
              {
                type: "input",
                message: "What is the manager id number?",
                name: "managerId"
              }
        ])
        .then((info) => {
            connection.query('INSERT INTO employee (emp_id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)', [info.empId, info.empFirst, info.empLastName, info.empRole, info.managerId], (err, res) => {
                if (err) throw err;
                console.table(res)
                init()
            });
        });
};

const delEmp = () =>{
    inquirer
    .prompt(
        {
            type:'input',
            message: 'what is the ID of the employee you want to delete',
            name: 'idToDel'
        }
    ).then((info) => {
        connection.query('DELETE FROM employee WHERE emp_id=(?)', info.idToDel, (err, res) => {
            if (err) throw err;
            console.table(res);
            init();
        })
    })
}

const updateEmpRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'which employee would you like to update?',
                name: 'empUpdate'
            },
            {
                type: 'input',
                message: 'update role to what?',
                name: 'updateRole'
            }
        ])
        .then((answer) => {
            connection.query('UPDATE employee SET emp_role=? WHERE first_name=?', [answer.updateRole, answer.empUpdate], (err, res) => {
                if (err) throw err;
                console.table(res);
                init();
            });
        });
};

const viewRoles = () => {
    connection.query('SELECT * FROM role_', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    } );
};

const addRole = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the name of the role?",
                name: "roleName"
              },
              {
                type: "input",
                message: "What is the salary for this role?",
                name: "salaryTotal"
              },
              {
                type: "input",
                message: "What is the department id number?",
                name: "deptID"
              } 
        ])
        .then((answer) => {
            connection.query('INSERT INTO role_ (role_title, role_salary, role_id) VALUES (?,?,?)', [answer.roleName, answer.salaryTotal, answer.deptID], (err, res) => {
                if (err) throw err;
                console.table(res);
                init();
            });
        });
};

const viewDepts = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if(err) throw err;
        console.table(res);
        init();
    });
}

const addDept = () => {
    inquirer
        .prompt([
            {

                type: "input",
                message: "What is the name of the department?",
                name: "deptName"
          
            }
        ])
        .then((answer) => {
            connection.query('INSERT INTO department (dept_name) VALUES (?)', [answer.deptName], (err, res) => {
                if(err) throw err;
                console.table(res)
                init();
            });
        });
};

const quit = () => {
    connection.end();
    process.exit();
}

// module.exports = viewEmps();
// module.exports = addEmployee();
// module.exports = updateEmpRole();
// module.exports = viewRoles();
// module.exports = addRole();
// module.exports = viewDepts();
// module.exports = addDept();
// module.exports = quit();

// module.exports = {
//     init,
//     viewEmps,
//     addEmployee,
//     updateEmpRole,
//     viewRoles,
//     addRole,
//     viewDepts,
//     addDept,
//     quit
// }

init();