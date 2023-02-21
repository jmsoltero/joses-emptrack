const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('.');

const lib = require('./funcs/funcs')

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'usmc2020',
//     database: 'etracker_db'
// });

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
            lib.viewEmps();
            break;
        case 'add employee':
            lib.addEmployee();
            break;
        case 'update employee role':
            lib.updateEmpRole();
            break;
        case 'view all roles':
            lib.viewRoles();
            break;
        case 'add role':
            lib.addRole();
            break;
        case 'view all departments':
            lib.viewDepts();
            break;
        case 'add department':
            lib.addDept();
            break;
        default:
            lib.quit();
    }
})
}

init();