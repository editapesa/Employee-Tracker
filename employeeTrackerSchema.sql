drop database if exists employeeTracker_db;
create database employeeTracker_db;

use employeeTracker_db;

create table department (
    id integer not null auto_increment,
    name varchar(30) not null,
    primary key (id)
);

create table role (
    id integer not null auto_increment,
    title varchar(30) not null,
    salary decimal(19, 2) null,
    department_id integer not null,
    index dep_ind (department_id),
    foreign key (department_id) references department(id),
    primary key (id)
);

create table employee (
    id integer not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id integer,
    manager_id integer null,
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id),
    primary key (id)
);

select * from department;
select * from role;
select * from employee;