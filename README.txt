# Documentação do Projeto: Sistema de Gerenciamento de Tarefas

## Como o projeto está estruturado?

Para rodar o projeto voce precisa primeiro rodar o back-end em Flask

- Entre no diretorio e rode o comando "python run.py"
  
Depois voce precisa rodar o projeto em react na pasta front-end

- Entre no diretorio em outro terminal e instale todas as bibliotecas e Dependências com o comando 'npm i'
- Apos a instalação para iniciar o projeto use o comando 'npm run dev' e entao clique no link localhost que será mostrado no terminal

Entre no link da pagina do react e ele ira consumir os serviços do back-end do Flask


## Descrição Geral dos serviços back-end

Este projeto é um sistema de gerenciamento de usuários e tarefas, construído utilizando o framework Flask para a criação de APIs RESTful. Ele oferece funcionalidades para gerenciar usuários e suas tarefas, incluindo cadastro de usuários, login, criação, atualização e exclusão de tarefas.

## Estrutura do Banco de Dados

O projeto utiliza SQLAlchemy como ORM (Object-Relational Mapping) para a definição e manipulação do banco de dados.

### Modelos (Models)

#### User
Representa os usuários do sistema, que podem criar e gerenciar tarefas.

- **Tabela**: `user`
- **Colunas**:
  - `id`: Inteiro, chave primária.
  - `name`: String (150), nome completo do usuário.
  - `username`: String (150), nome de usuário único.
  - `password`: String (150), senha do usuário.
- **Relacionamentos**:
  - `tasks`: Relação um-para-muitos com a tabela `Task`, indicando as tarefas atribuídas ao usuário.

#### Task
Representa uma tarefa associada a um usuário.

- **Tabela**: `task`
- **Colunas**:
  - `id`: Inteiro, chave primária.
  - `title`: String (150), título da tarefa.
  - `description`: Texto, descrição opcional da tarefa.
  - `status`: Inteiro, indica o status da tarefa (ex: 0 - Pendente, 1 - Concluída).
  - `user_id`: Inteiro, chave estrangeira que referencia a tabela `user`, associando a tarefa a um usuário.

## Funcionalidades do Sistema

### 1. Cadastro de Usuário
Para registrar um novo usuário, são necessários os seguintes campos:
- `name`: Nome completo do usuário.
- `username`: Nome de usuário único.
- `password`: Senha do usuário.

### 2. Login de Usuário
Para o login, são necessários os seguintes campos:
- `username`: Nome de usuário.
- `password`: Senha do usuário.

### 3. Obtenção de Lista de Usuários
Permite a visualização de todos os usuários cadastrados no sistema, retornando o ID e nome de cada usuário.

### 4. Criação de Tarefas
Para criar uma nova tarefa, são necessários os seguintes campos:
- `title`: Título da tarefa.
- `description`: Descrição opcional da tarefa.
- `status`: Status opcional da tarefa (0 - Pendente, 1 - Concluída, valor padrão é 0).
- `user_id`: ID do usuário ao qual a tarefa será atribuída.

### 5. Obtenção de Lista de Tarefas
Retorna todas as tarefas existentes no sistema, com informações detalhadas sobre título, descrição, status e o usuário associado.

### 6. Atualização do Status de Tarefas
Para atualizar o status de uma tarefa, é necessário fornecer:
- `status`: Novo status da tarefa (0 - Pendente, 1 - Concluída).

### 7. Atualização do Título de Tarefas
Para atualizar o título de uma tarefa, é necessário fornecer:
- `title`: Novo título da tarefa.

### 8. Atualização da Descrição de Tarefas
Para atualizar a descrição de uma tarefa, é necessário fornecer:
- `description`: Nova descrição da tarefa.

### 9. Atualização do Usuário de uma Tarefa
Para atualizar o usuário ao qual a tarefa está atribuída, é necessário fornecer:
- `user_id`: Novo ID do usuário.

### 10. Exclusão de Tarefas
Permite excluir uma tarefa específica com base no seu ID.

## Rotas da API

### 1. **/register** - [POST]
Registra um novo usuário no sistema.

- **Parâmetros** (JSON):
  - `name`: Nome completo do usuário.
  - `username`: Nome de usuário único.
  - `password`: Senha do usuário.
- **Respostas**:
  - `201`: Usuário registrado com sucesso.
  - `400`: Usuário já existe.
  - `500`: Erro no servidor.

### 2. **/login** - [POST]
Realiza login de um usuário.

- **Parâmetros** (JSON):
  - `username`: Nome de usuário.
  - `password`: Senha do usuário.
- **Respostas**:
  - `200`: Login bem-sucedido.
  - `401`: Credenciais inválidas.

### 3. **/users** - [GET]
Retorna a lista de todos os usuários cadastrados.

- **Respostas**:
  - `200`: Lista de usuários com `id` e `name`.
  - `500`: Erro no servidor.

### 4. **/tasks** - [GET]
Retorna a lista de todas as tarefas.

- **Respostas**:
  - `200`: Lista de tarefas com detalhes como `id`, `title`, `description`, `status`, e informações do usuário.
  - `500`: Erro no servidor.

### 5. **/tasks** - [POST]
Cria uma nova tarefa para um usuário.

- **Parâmetros** (JSON):
  - `title`: Título da tarefa.
  - `description`: Descrição opcional da tarefa.
  - `status`: Status da tarefa (opcional, padrão 0).
  - `user_id`: ID do usuário ao qual a tarefa será atribuída.
- **Respostas**:
  - `201`: Tarefa criada com sucesso.
  - `500`: Erro no servidor.

### 6. **/tasks/<int:task_id>** - [DELETE]
Exclui uma tarefa existente com base no seu ID.

- **Parâmetros**: ID da tarefa na URL.
- **Respostas**:
  - `200`: Tarefa excluída com sucesso.
  - `404`: Tarefa não encontrada.
  - `500`: Erro no servidor.

### 7. **/tasks/<int:task_id>/status** - [PUT]
Atualiza o status de uma tarefa.

- **Parâmetros** (JSON):
  - `status`: Novo status da tarefa.
- **Respostas**:
  - `200`: Status atualizado com sucesso.
  - `404`: Tarefa não encontrada.
  - `500`: Erro no servidor.

### 8. **/tasks/<int:task_id>/title** - [PUT]
Atualiza o título de uma tarefa.

- **Parâmetros** (JSON):
  - `title`: Novo título da tarefa.
- **Respostas**:
  - `200`: Título atualizado com sucesso.
  - `404`: Tarefa não encontrada.
  - `500`: Erro no servidor.

### 9. **/tasks/<int:task_id>/description** - [PUT]
Atualiza a descrição de uma tarefa.

- **Parâmetros** (JSON):
  - `description`: Nova descrição da tarefa.
- **Respostas**:
  - `200`: Descrição atualizada com sucesso.
  - `404`: Tarefa não encontrada.
  - `500`: Erro no servidor.

### 10. **/tasks/<int:task_id>/user** - [PUT]
Atualiza o usuário associado a uma tarefa.

- **Parâmetros** (JSON):
  - `user_id`: ID do novo usuário a ser associado à tarefa.
- **Respostas**:
  - `200`: Usuário atualizado com sucesso.
  - `404`: Tarefa ou usuário não encontrado.
  - `500`: Erro no servidor.

## Considerações Finais

Este sistema fornece um conjunto básico de operações para a criação e gerenciamento de usuários e suas respectivas tarefas. Cada rota é projetada para ser simples e clara, com tratamento básico de erros para facilitar a depuração e a utilização da API.

### Dependências

- Flask
- Flask SQLAlchemy

Este projeto pode ser facilmente expandido para incluir funcionalidades adicionais, como autenticação de tokens (JWT), melhorias na segurança do armazenamento de senhas (ex: bcrypt) e novos recursos de gerenciamento de tarefas.
