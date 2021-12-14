create database livraria;

use livraria; 

create table autores (
	id_autor int not null identity (1,1) PRIMARY KEY, --not null, não se pode passar um campo vazio, sempre tem q ser preenchido.
	nome_autor varchar(20),
	sobrenome_autor varchar(20)
);

create table editoras (
	id_editora int identity (1,1) PRIMARY KEY,
	nome_editora varchar(50)
)

create table livros (
	id_livro int identity (1,1) PRIMARY KEY,
	nome_livro varchar (80),
	isbn int,
	data_publicacao date,
	preco  decimal (5,2), --no numero decimal, o 5 antes da virgula equivale a quantas casas antes da vigula no preço, o 2 é dos numeros dps da virgula.
	fk_autor int,
	fk_editora int,

	foreign key (fk_autor) references autores (id_autor),
	foreign key (fk_editora) references editoras (id_editora)
)

insert into autores ( nome_autor, sobrenome_autor) values
	('Joanne', 'K. Rowling'),
	('George', 'R. R. Martin'),
	('Robert', ' Fisher'),
	('Clive', ' S. Lewis');

insert into editoras (nome_editora) values
	('Rocco'),
	('LeYa'),
	('Editorial Presenca'),
	('Editorial Presenca');

insert into livros (nome_livro, isbn, data_publicacao, preco, fk_autor, fk_editora ) values
	('Harry Potter e a Pedra Filosofal', 123, '2000/04/07', 25.90, 1 , 1),
	('A Guerra dos Tronos', 456, '1996/08/06', 64.37, 2, 2),
	('Cavaleiro da Armadura Enferrujada', 789, '2016/01/01', 107.00, 3, 3),
	('O Leão, a Feiticeira e o Guarda-Roupa', 321, '1950/10/16', 24.90, 4, 4);
	-- para q nao continue somando de onde parou o ID, vc tem q excluir a tabela. q neste caso é a tabela dos livros.

select * from livros;

delete from livros; -- deletará tudo o conteudo do livros.


/*
-- Livro: Harry Potter e a Pedra Filosofal
-- Autor: Joanne K. Rowling
-- Editora: Rocco
-- isbn: 123
-- Data Publicação: 2000/04/07
-- Preco: 25.90


-- Livro: A Guerra dos Tronos
-- Autor: George R. R. Martin
-- Editora: LeYa
-- isbn: 456
-- Data Publicação: 1996/08/06
-- Preco: 64.37


-- Livro: Cavaleiro da Armadura Enferrujada
-- Autor: Robert Fisher
-- Editora: Editorial Presenca
-- isbn: 789
-- Data Publicação: 2016/01/01
-- Preco: 107.00


-- Livro: O Leão, a Feiticeira e o Guarda-Roupa
-- Autor: Clive S. Lewis
-- Editora: Editorial Presenca
-- isbn: 321
-- Data Publicação: 1950/10/16
-- Preco: 24.90
*/

-- Consultar somente os livros em ordem alfabetica por nome.



-- Consultar livros com as datas em ordem decrescente por data.



-- Consultar livros que contenha a palavra "Armadura" no titulo.



-- Consultar quantos livros tem na tabela em uma coluna com o nome quantidade_livro.

-- Consultar somente os livros em ordem alfabetica por nome.
select * from livros
order by livros.nome_livro;

-- Consultar livros com as datas em ordem decrescente por data.

-- Consultar livros que contenha a palavra "Armadura" no titulo.

-- Consultar quantos livros tem na tabela em uma coluna com o nome quantidade_livro.


-- Deletar o livro A guerra dos tronos.
delete from livros where id_livro = 2;

-- Na tabela livros mudar o preco do livro Cavaleiro da Armadura Enferrujada para 500.
update livros set preco = 500.00 where id_livro = 3;


-- Consultar o nome do livro, o autor e a editora.