const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { restoreDefaultPrompts } = require('inquirer');

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
    connection.query('select * from department', (err, res) => {
            if (err) throw (err);
            console.table(res);
            start();
            });            
};

const viewRoles = () => {
    connection.query('select * from role', (err, res) => {
            if (err) throw (err);
            console.table(res);
            start();
            });
};

const viewEmp = () => {
    connection.query('select * from employee', (err, res) => {
            if (err) throw (err);
            console.table(res);
            start();
            });
};

const addDept = () => {
    inquirer
        .prompt({
            name: 'addDept',
            type: 'input',
            message: 'What is the name of the department you would like to add?',
        })
        .then((answer) => {
            connection.query(`insert into department (name) values ('${answer.addDept}')`)
            console.log(`\n${answer.addDept} has been added to departments.\n`)
            start();
        });
};

const addRole = () => {
    inquirer
        .prompt({
            name: 'addRole',
            type: 'input',
            message: 'What role title would you like to add?',
        })
        .then((answer) => {
            connection.query(`insert into role (title) values ('${answer.addRole}')`)
            console.log(`\n${answer.addRole} has been added to employee roles.\n`)
            start();
        });
};

const addEmp = () => {
    inquirer
        .prompt([
            {
                name: 'EmpFirstName',
                type: 'input',
                message: "What is the employee's first name?",
            },
            {
                name: 'EmpLastName',
                type: 'input',
                message: "What is the employee's last name?",
            },
            {
                name: 'EmpRole',
                type: 'input',
                message: "What is the employee's role?",
            },
        ])
        .then((answer) => {
            connection.query(`insert into employee (first_name, last_name, role_id) values ('${answer.EmpFirstName}, ${answer.EmpLastName}, ${answer.EmpRole}')`)
            console.log(`\n${answer.EmpFirstName} ${answer.EmpLastName} has been added to the employee list.\n`)
            start();
        });
};

const updateEmpRole = () => {
    connection.query('select (first_name, last_name) from employee', (err, res) => {
        if (err) throw err;

    inquirer
        .prompt([
            {
                name: 'empChangingRole',
                type: 'rawlist',
                choices() {
                    const empArray = [];
                    results.forEach(({ first_name, last_name }) => {
                        empArray.push(first_name, last_name);
                    });
                    return empArray;
                },
                message: 'Which employee would you like to update',
            },
        ])
    }),
    connection.query('select title from role', (err, res) => {
        if (err) throw err;

        inquirer
        .prompt([
            {
                name: 'empNewRole',
                type: 'rawlist',
                choices() {
                    const roleArray = [];
                    results.forEach(({ title }) => {
                        roleArray.push(title);
                    });
                    return roleArray;
                },
                message: "What is the employee's new role?",
            },
        ])
        .then((answer) => {
            // connection.query(`insert into employee (first_name, last_name, role_id) values ('${answer.EmpFirstName}, ${answer.EmpLastName}, ${answer.EmpRole}')`)
            console.log(`\n${answer.empChangingRole}'s has been updated to ${answer.empNewRole}\n`)
            start();
        });
    })
}