const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'brutus',
    database: 'employeeTracker_db',
});

connection.connect((err) => {
    if (err) throw err;
    start();
})

const start = () => {
    inquirer
        .prompt({
            name: 'whatToDo',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View departments', 'View roles', 'View employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee roles', 'Exit'],
        })
        .then((answer) => {
            if (answer.whatToDo === 'View departments') {
                viewDept();
            } else if (answer.whatToDo === 'View roles') {
                viewRoles();
            } else if (answer.whatToDo === 'View employees') {
                viewEmp();
            } else if (answer.whatToDo === 'Add a department') {
                addDept();
            } else if (answer.whatToDo === 'Add a role') {
                addRole();
            } else if (answer.whatToDo === 'Add an employee') {
                addEmp();
            } else if (answer.whatToDo === 'Update employee roles') {
                updateEmpRole();
            } else {
                connection.end();
            }
        });
};