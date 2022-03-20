create database bookstore;

use bookstore;

show tables;

create table books (
	id int auto_increment primary key,
    author1 varchar(100) not null,
    author2 varchar(100),
    author3 varchar(100),
    title varchar(100),
    description text,
    place_sell char(3),
    stock int default 0,
    creation_date timestamp default current_timestamp on update current_timestamp
);

alter table books
add price int default 0,
add status enum("available", "out of stock", "limited");

alter table books
drop column place_sell;

insert into books (author1, author2, author3, title, description, stock, price, status) values
("A", "B", "C", "Book 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 5, 100, "available"),
("D", "E", "F", "Book 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 1, 200, "limited"),
("G", "H", "I", "Book 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 0, 150, "out of stock");

select * from books;

select id as ID, author1 as A1, author2 as A2, author3 as A3
from books;

select * from books
where id=1;

select * from books
where stock>0 and price<200;

select * from books
where stock>0 or price<500;

select * from books
where not stock=0;

select * from books
order by id asc;

select + from books
limit 2;

update books
set author1 = "Z", price = 500
where id = 2;

delete from books where id=3;