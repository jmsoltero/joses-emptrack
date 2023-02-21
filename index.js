const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usmc2020',
    database: 'Etracker'
});

const initQuest = {
    type: 'list',
    name: 'init',
    message: 'What would you like to do? 😁',
    choices: [
        'view all employees',
        'add employee',
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

