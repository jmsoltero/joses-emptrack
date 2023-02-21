const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'usmc2020',
    database: 'Etracker'
});



const viewEmps = () => {
    let query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init()
    });
};

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'whats the first name of the employee?',
                name: 'empFirstName'
            },
            {
                type: 'input',
                message: ''
            }
        ])
}