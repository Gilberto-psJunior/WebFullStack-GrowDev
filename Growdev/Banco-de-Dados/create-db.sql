create table estado(
id serial primary key,
uf varchar(10),
nome varchar(100)
);


create table cidade(
id serial primary key,
id_estado int not null,
uf varchar(10),
foreign key (id_estado) references estado(id)
);

create table cliente(
idCliente serial primary key,
nome varchar,
cpf CHAR(11),
id_cidade int not null ,

dtNasc date,
logradouro varchar(100),
foreign key (id_cidade) references cidade(id)
);

create table formaPagamento ( 
id serial  primary key,
nomeFormaPag varchar(45)
);


create table vendas( 
id serial primary key,
id_formaPagamento int not null,
id_cliente int not null,
dataVenda date,
valorTotal decimal(10,2),
foreign key (id_formaPagamento) references formaPagamento(id),
foreign key (id_cliente) references cliente(idCliente)
);

create table produto(
id serial primary key,
nomeproduto varchar(100),
valorProduto decimal(10,2)
);

create table servico ( 
id serial primary key ,
nomeServico varchar(100),
valorServico decimal(10,2)
);

CREATE TABLE itensVendas (
    id SERIAL PRIMARY KEY,
    produto_idProduto INT NOT NULL,
    servico_idServico INT NOT NULL,
    vendas_idvendas INT NOT NULL,
    FOREIGN KEY (produto_idProduto) REFERENCES produto(id),
    FOREIGN KEY (servico_idServico) REFERENCES servico(id),
    FOREIGN KEY (vendas_idvendas) REFERENCES vendas(id)
);

create table acompanhamento( 
id serial primary key,

vendas_idVendas int not null,
status varchar(100),
foreign key (vendas_idVendas) references vendas(id)

);

create table veiculo ( 
id serial primary key,
user_idUser int not null,
modeloVeiculo varchar,
anoVeiculo char(4),
placa varchar(10),
foreign key (user_idUser) references cliente(idCliente)
);





