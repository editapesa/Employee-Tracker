use employeeTracker_db;

insert into department (name)
values ('Sales'), ('Engineering'), ('Legal'), ('Finance');

insert into role (title)
values ('Sales Lead'), ('Salesperson'), ('Lead Engineer'), ('Software Engineer'), ('Lawyer'), ('Legal Assistant'), ('Accountant');

insert into employee (first_name, last_name) values ('Gia', 'Sanchez');
insert into employee (first_name, last_name) values ('Leo', 'Armon');
insert into employee (first_name, last_name) values ('Nicky', 'Jams');
insert into employee (first_name, last_name) values ('Chris', 'Cornell');
insert into employee (first_name, last_name) values ('Jenny', 'Anderson');
insert into employee (first_name, last_name) values ('Lola', 'Mess');
insert into employee (first_name, last_name) values ('Anthony', 'Gallo');
insert into employee (first_name, last_name) values ('Frankie', 'Furter');

select * from department;
select * from role;
select * from employee;

-- select title, first_name, last_name 
-- from role
-- inner join employee on role.title = employee.title;

-- select title, name
-- from department
-- inner join role on department.name = title.department;

-- select name, first_name, last_name
-- from department
-- inner join employee on department.name = employee.name; 