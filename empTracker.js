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
        .then((answer) => {   
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

const viewDept = () => {
    const query = connection.query('select * from department', (err, res) => {
            if (err) throw (err);
            res.forEach(({ id, name}) => {
                console.table(`${id} | ${name}`);
            });
        }
    );
    console.log(query.sql);
};

const viewRoles = () => {
    const query = connection.query('select * from role', (err, res) => {
            if (err) throw (err);
            res.forEach(({ id, title, salary, department_id}) => {
                console.table(`${id} | ${title} | ${salary} | ${department_id}`);
            });
        }
    );
    console.log(query.sql);
};

const viewEmp = () => {
    const query = connection.query('select * from employee', (err, res) => {
            if (err) throw (err);
            res.forEach(({ id, first_name, last_name}) => {
                console.table(`${id} | ${first_name} | ${last_name}`);
            });
        }
    );
    console.log(query.sql);
};