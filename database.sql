create database item;

use item;

create table users(
id int not null primary key auto_increment,
name varchar(255) not null,
email varchar(255) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM users;

-- Derruba tabela users (so utilize caso necessário)
drop table users;
