
CREATE TABLE Usuario (
    id INT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(50) UNIQUE,
    senha VARCHAR(255)
);


CREATE TABLE Tweet (
    id INT PRIMARY KEY,
    conteudo TEXT,
    tipo VARCHAR(20),
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);


CREATE TABLE Likes (
    id INT PRIMARY KEY,
    usuario_id INT,
    tweet_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (tweet_id) REFERENCES Tweet(id)
);


CREATE TABLE Retweet (
    tweet_id INT,
    usuario_id INT,
    PRIMARY KEY (tweet_id, usuario_id),
    FOREIGN KEY (tweet_id) REFERENCES Tweet(id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);


CREATE TABLE Seguidor (
    id INT PRIMARY KEY,
    usuario_id INT,
    seguidor_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (seguidor_id) REFERENCES Usuario(id)
);

-- Inserindo usuários
INSERT INTO Usuario (id, nome, email, username, senha) VALUES
(1, 'Alice', 'alice@email.com', 'alice123', 'senha123'),
(2, 'Bob', 'bob@email.com', 'bob456', 'senha456');

-- Inserindo tweets
INSERT INTO Tweet (id, conteudo, tipo, usuario_id) VALUES
(1, 'gosto de bolo', 'Tweet', 1),
(2, ' bolo com cobertura', 'Re-Tweet', 2),
(3, 'hoje esta calor', 'Tweet', 2);

-- Inserindo likes
INSERT INTO Likes (id, usuario_id, tweet_id) VALUES
(1, 2, 1),
(2, 1, 3);

-- Consulta
SELECT Usuario.nome as usuario_nome, Tweet.conteudo as tweet_conteudo, 'Tweet' as tipo
FROM Tweet
JOIN Usuario ON Tweet.usuario_id = Usuario.id
WHERE Tweet.usuario_id = 1



SELECT Usuario.nome as usuario_nome, Tweet.conteudo as tweet_conteudo, 'Likes' as tipo
FROM likes 
JOIN Usuario ON Likes.usuario_id = Usuario.id
JOIN Tweet ON Likes.tweet_id = Tweet.id
WHERE Likes.usuario_id = 1;
