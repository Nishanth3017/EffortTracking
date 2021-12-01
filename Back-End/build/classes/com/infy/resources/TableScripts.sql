drop table EmployeeEntity;
drop table ManagerEntity;
drop table ReviewerEntity;
drop table EffortEntity;
drop table Qustionpaper;
create table EmployeeEntity (
empId Integer NOT NULL,
name varchar2(30),
dateOfBirth date ,
password varchar2(30) ,
stream varchar2(5) ,
cnfpassword varchar2(30) ,
message varchar2(30),
CONSTRAINT PS_q_PK PRIMARY KEY(empId)
);
create table ManagerEntity (
managerId varchar2(30) PRIMARY KEY,
name varchar2(30) not null,
dateOfBirth date not null,
password varchar2(30) not null,
stream varchar2(5) not null
);
create table ReviewerEntity (
reviewerId varchar2(30) PRIMARY KEY,
name varchar2(30) not null,
dateOfBirth date not null,
password varchar2(30) not null,
stream varchar2(5) not null
);
create table EffortEntity(
 empId number PRIMARY KEY,
 name varchar2(30) not null,
 effort number 
);

insert into EmployeeEntity values(1005,'nandhu','30-nov-1997','kutty007','JEE','kutty007',null);

insert into ManagerEntity values('mn61','nandu','22-nov-1997','kutty007','JEE');

insert into ReviewerEntity values('mn61','nandu','22-nov-1997','kutty007','MS');
insert into EffortEntity values('1000','Raghav S','5');

select * from EmployeeEntity;
select * from ManagerEntity;
select * from ReviewerEntity;
select * from EffortEntity;
