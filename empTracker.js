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
});

const start = () => {
    inquirer
        .prompt({
            name: 'whatToDo',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View departments', 'View roles', 'View employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee roles', 'Exit'],
        })
        .then((answer) => {   //use switch, case ?
            switch (answer.whatToDo)  {
                case 'View departments':
                    viewDept();
                    break;

                case 'View roles':
                    viewRoles();
                    break;

                case 'View employees':
                    viewEmp();
                    break;

                case 'Add a department':
                    addDept();
                    break;

                case 'Add a role':
                    addRole();
                    break;

                case 'Add an employee':
                    addEmp();
                    break;

                case 'Update employee roles':
                    updateEmpRole();
                    break;
            
                case 'Exit':
                    connection.end();
                    break;
            }
        });
};