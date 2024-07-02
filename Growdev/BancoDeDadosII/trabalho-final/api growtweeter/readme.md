# GrowTwitter - API e Banco de Dados 🚀

Bem-vindo ao GrowTwitter! Este projeto tem como objetivo modelar e criar um banco de dados para uma rede social no estilo Twitter usando Prisma, além de desenvolver uma API para gerenciar as funcionalidades CRUD da aplicação.

## Instalação e Configuração do Prisma 📦

Para iniciar o projeto GrowTwitter, vamos instalar e configurar o Prisma para modelar e criar as tabelas necessárias no banco de dados PostgreSQL.

### Requisitos de Banco de Dados 🗃️

1. **Cadastro de Usuários**:
    - Identificador único
    - Nome
    - E-mail
    - Username
    - Senha

2. **Cadastro de Tweets por Usuários**:
    - Identificador único
    - Conteúdo
    - Tipo (Tweet ou Reply)
    - Referência ao usuário que criou o tweet

3. **Likes em Tweets**:
    - Referência ao usuário que deu o like
    - Referência ao tweet que recebeu o like

4. **Autenticação de Usuários**:
    - Login com username/email e senha

### Requisitos Adicionais de Banco de Dados 🛠️

1. **Seguidores**:
    - Referência ao usuário que segue
    - Referência ao usuário seguido

2. **Replies**:
    - Referência ao tweet original
    - Referência ao usuário que respondeu

### Configuração do Prisma ORM 🛠️

1. Configurar o Prisma ORM no projeto.
2. Conectar ao banco de dados PostgreSQL.
3. Criar todas as tabelas necessárias utilizando os models do Prisma.

🔗 [Documentação do Prisma](https://www.prisma.io/docs/getting-started)
🔗 [Guia de Configuração do PostgreSQL](https://www.postgresql.org/docs/current/tutorial-install.html)

## Criação da API com Express 🌐

Vamos criar uma API utilizando Express para gerenciar as funcionalidades do GrowTwitter.

### Requisitos de API 📋

1. **Usuários**:
    - CRUD completo (Create, Read, Update, Delete)

2. **Tweets**:
    - CRUD completo
    - Apenas usuários autenticados podem criar, editar ou deletar tweets

3. **Likes**:
    - CRUD completo
    - Apenas usuários autenticados podem dar likes

4. **Autenticação**:
    - Rota para login de usuários
    - A autenticação deve ser feita com username/email e senha
    - As funcionalidades de tweets e likes só podem ser executadas mediante login

### Requisitos Adicionais de API ✨

1. **Seguidores**:
    - CRUD completo
    - Apenas usuários autenticados podem seguir outros usuários

2. **Replies**:
    - CRUD completo
    - Apenas usuários autenticados podem responder tweets

### Regras Específicas 📜

1. **Tweets**:
    - Devem ter um identificador único
    - Podem ser do tipo Tweet ou Reply
    - Devem ser associados a um usuário
    - Podem conter likes e replies

2. **Likes**:
    - Um usuário pode curtir um tweet específico uma única vez
    - Um tweet pode ter múltiplos likes

3. **Followers**:
    - Um usuário pode seguir outro usuário
    - Um usuário não pode seguir a si mesmo

4. **Replies**:
    - Um usuário pode responder a um tweet específico
    - Replies também são tweets e devem conter uma referência ao tweet original

🔗 [Documentação do Express](https://expressjs.com/pt-br/)
🔗 [Autenticação com JWT](https://jwt.io/introduction/)

## Dados das Tabelas 📊

- **Usuário**:
    - Identificador (ID)
    - Nome
    - E-mail
    - Username
    - Senha

- **Tweet**:
    - Identificador (ID)
    - Conteúdo
    - Tipo (Tweet ou Reply)
    - Referência ao usuário (ID)

- **Like**:
    - Referência ao usuário (ID)
    - Referência ao tweet (ID)

- **Reply**:
    - Referência ao tweet original (ID)
    - Referência ao usuário que respondeu (ID)

- **Seguidor**:
    - Referência ao usuário (ID)
    - Referência ao seguidor (ID)

## Boas Práticas ✔️

 



---

