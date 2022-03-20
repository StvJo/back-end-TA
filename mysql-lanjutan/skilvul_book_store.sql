create database skilvulbookstore;

use skilvulbookstore;

create table penerbit (
	id int(10) not null auto_increment primary key,
    nama varchar(50),
    kota varchar(50)
);

create table penulis (
	id int(10) not null auto_increment primary key,
    nama varchar(50),
    kota varchar(50)
);

create table buku (
	id int(10) not null auto_increment primary key,
    isbn varchar(50),
    judul varchar(50),
    penulis int(10),
    penerbit int(10),
    harga int(10),
    stock int(10),
    foreign key (penulis) references penulis(id),
    foreign key (penerbit) references penerbit(id)
);

select buku.id, penerbit.nama as penerbit, penerbit.kota as asal
from buku
inner join penerbit on buku.penerbit = penerbit.id;

select buku.id, penerbit.nama as penerbit, penerbit.kota as asal
from buku
left join penerbit on buku.penerbit = penerbit.id;

select buku.id, penerbit.nama as penerbit, penerbit.kota as asal
from buku
right join penerbit on buku.penerbit = penerbit.id;

select max(harga)
from buku
where stock<10;

select min(harga)
from buku;

select count(harga)
from buku
where harga<100000;




insert into penerbit (nama, kota) values
("A", "Kota A"),
("B", "Kota B"),
("C", "Kota C");

insert into penulis (nama, kota) values
("D", "Kota D"),
("E", "Kota E"),
("F", "Kota G");

insert into buku (isbn, judul, penulis, penerbit, harga, stock) values
(001, "Buku A", "1", "1", 50000, 10),
(002, "Buku B", "2", "2", 90000, 5);
