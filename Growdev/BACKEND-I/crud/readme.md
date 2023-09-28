# Atividade CRUD tarefas

**Especificação: CRUD de Gerenciador de Tarefas**

Nesta atividade prática, você criará um sistema CRUD (Create, Read, Update, Delete) para um gerenciador de tarefas simples usando a linguagem JavaScript. O sistema permitirá que o usuário crie, liste, atualize e exclua tarefas. **O foco principal é praticar a criação das operações CRUD (Create, Read, Update, Delete) em JavaScript usando funções, objetos, array e os métodos que aprendemos nas aulas.**

O desenvolvimento desse sistema deve atender alguns requisitos:

1. **Criação de Tarefa:**
    - Crie uma função chamada **`createTask(title, description)`** que recebe o titulo e descrição como parâmetro e permite adicionar uma nova tarefa à lista.
    - A função deve verificar se o título da tarefa é fornecido. Se não for, deve exibir uma mensagem de erro indicando que o título é obrigatório.
    - A nova tarefa deve ser um objeto com as propriedades: **`title`**, **`description`** e **`completed`** (inicializado como **`false`**).
2. **Listagem de Tarefas:**
    - Crie uma função chamada **`listTasks()`** que exiba uma lista formatada de todas as tarefas cadastradas.
    - Percorra o array de tarefas e mostre o índice, título, descrição e o status (concluída ou não) de cada tarefa.
3. **Atualização de Status de Tarefa:**
    - Crie uma função chamada **`updateTaskStatus(index, completed)`** que permita atualizar o status de conclusão de uma tarefa.
    - Verifique se o índice informado existe e, em seguida, atualize a propriedade **`completed`** da tarefa correspondente para o valor fornecido.
4. **Atualização de Tarefa:**
    - Crie uma função chamada **`updateTask(index, newTitle, newDescription)`** que permita atualizar o título e a descrição de uma tarefa existente.
    - Verifique se o índice fornecido é válido e se o novo título é fornecido. Se não for, exiba mensagens de erro apropriadas.
    - Atualize o título e a descrição da tarefa selecionada com os valores fornecidos.
5. **Exclusão de Tarefa:**
    - Crie uma função chamada **`deleteTask(index)`** que permita excluir uma tarefa da lista.
    - Verifique se o índice fornecido é válido e, em seguida, remova a tarefa correspondente da lista.
6. **Execução:**
    - Crie algumas tarefas de exemplo utilizando a função **`createTask`**.
    - Liste as tarefas utilizando a função **`listTasks`**.
    - Atualize o status de uma tarefa e liste novamente.
    - Atualize o título e descrição de uma tarefa e liste novamente.
    - Exclua uma tarefa e liste novamente.

**Observações:**

- Testar cada função e verifique se as saídas no console estão de acordo com o esperado.
- Utilize funções bem nomeadas, variáveis claras e comentários adequados para tornar o código compreensível.
- Podem enviar as dúvidas pelo Discord.



Para quem quer ir além, um desafio:

Neste desafio, você vai incluir no sistema de gerenciamento de tarefas as funcionalidades de criar usuário e fazer login. Isso permitirá que diferentes usuários tenham suas próprias listas de tarefas independentes.

1. **Criar Usuário:**
    - Crie uma função chamada **`createUser(username, password)`** que recebe o nome de usuário e senha por parâmetro e permite criar um novo usuário.
    - Verifique se o nome de usuário (username) e a senha (password) são fornecidos. Se não forem, exiba mensagens de erro apropriadas.
    - Crie um objeto de usuário contendo as propriedades: **`username`**, **`password`** e **`tasks`** (inicializado como um array vazio).
2. **Login:**
    - Crie uma função chamada **`login(username, password)`** que permita um usuário fazer login.
    - Verifique se o nome de usuário e a senha fornecidos correspondem a um usuário existente. Se corresponderem, retorne o objeto de usuário correspondente. Se não, retorne uma mensagem.
3. **Associar Tarefas aos Usuários:**
    - Modifique a função **`createTask`** para receber também o objeto de usuário como argumento.
    - Ao criar uma nova tarefa, adicione-a à lista de tarefas do usuário.
4. **Execução:**
    - Crie pelo menos dois usuários diferentes utilizando a função **`createUser`**.
    - Realize o login com um usuário utilizando a função **`login`**.
    - Execute operações de criar, listar, atualizar e excluir tarefas utilizando o usuário logado.
    - Verifique se as operações são executadas apenas nas tarefas do usuário logado.