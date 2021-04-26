use employeeTracker_db;

insert into department (name)
values ('Sales'), ('Engineering'), ('Legal'), ('Finance');

insert into role (title, salary, department_id)
values ('Sales Lead', 60000, 1), ('Salesperson', 40000, 1), ('Lead Engineer', 90000, 2), ('Software Engineer', 70000, 2), ('Lawyer', 100000, 3), ('Legal Assistant', 50000, 3), ('Accountant', 80000, 4);

insert into employee (first_name, last_name, role_id, manager_id) values ('Gia', 'Sanchez', 1, null);
insert into employee (first_name, last_name, role_id, manager_id) values ('Leo', 'Armon', 2, 1);
insert into employee (first_name, last_name, role_id, manager_id) values ('Nicky', 'Jams', 3, null);
insert into employee (first_name, last_name, role_id, manager_id) values ('Chris', 'Cornell', 4, 2);
insert into employee (first_name, last_name, role_id, manager_id) values ('Jenny', 'Anderson', 5, null);
insert into employee (first_name, last_name, role_id, manager_id) values ('Lola', 'Mess', 6, 3);
insert into employee (first_name, last_name, role_id, manager_id) values ('Anthony', 'Gallo', 7, null);
insert into employee (first_name, last_name, role_id, manager_id) values ('Frankie', 'Furter', 8, 4);

select * from department;
select * from role;
select * from employee;

