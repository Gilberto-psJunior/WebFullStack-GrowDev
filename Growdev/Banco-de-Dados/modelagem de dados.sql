
create table professores (
	id uuid default uuid_generate_v4() primary key,
	nome varchar(200) not null,
	sobrenome varchar(200) not null,
	cpf char(11) not null unique,
	especialidade varchar(100)
)

create table turmas (
    id uuid default uuid_generate_v4() primary key,
    id_professor uuid not null references  professores(id),
    nome varchar(100) not null,
    data_inicio date not null,
    data_termino date not null
)

create table aluno (
	id uuid default uuid_generate_v4() primary key,
	id_turmas uuid not null references turmas(id),
	nome varchar(200) not null,
	sobrenome varchar(200),
	cpf char(11) not null unique,
	ativo boolean default true
)

insert into professores(nome,sobrenome,cpf,especialidade) values ('marcos','nobrega','11122233344','backend')
insert into turmas(id_professor,nome,data_inicio,data_termino) values ('beb0abff-dfc7-4ca5-9a56-9ab2264b5300','turma16','2024-02-01','2025-02-01')
insert into aluno (id_turmas,nome,sobrenome,cpf,ativo) values ('e2ec5195-22ff-4645-b6ac-316caf50b90c','julie','halfman','11122233345','true')
-- tudo
select a.nome as nome_aluno, t.nome as curso, f.nome as professor
from aluno as a
inner join turmas as t on a.id_turmas = t.id
inner join professores as f on t.id_professor = f.id;
--aluno por curso
select a.nome as nome_aluno, t.nome as curso, f.nome as professor
from aluno as a
inner join turmas as t on a.id_turmas = t.id
inner join professores as f on t.id_professor = f.id
where t.id = 'e2ec5195-22ff-4645-b6ac-316caf50b90c'

insert into professores(nome,sobrenome,cpf,especialidade) values ('Laura','nobrega','11122233345','frontend')

select *from turmas
select *from professores 
select *from aluno



