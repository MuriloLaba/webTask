from flask import Blueprint, jsonify, request
from .models import User, Task
from . import db

main = Blueprint('main', __name__)

# Rota de Registro
@main.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        name = data.get('name')
        username = data.get('username')
        password = data.get('password')

        # Verificar se o usuário já existe
        if User.query.filter_by(username=username).first():
            return jsonify({"error": "Usuário já existe!"}), 400

        # Criar novo usuário
        new_user = User(name=name, username=username, password=password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "Usuário registrado com sucesso!"}), 201
    except Exception as e:
        # Log do erro para ajudar no debug
        print(f"Erro durante o cadastro: {e}")
        return jsonify({"error": "Erro no servidor"}), 500

# Rota de Login
@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Verificar se o usuário existe e a senha está correta
    user = User.query.filter_by(username=username, password=password).first()

    if user:
        return jsonify({"message": "Login bem-sucedido!"})
    else:
        return jsonify({"error": "Credenciais inválidas!"}), 401

@main.route('/users', methods=['GET'])
def get_users():
    try:
        # Busca todos os usuários
        users = User.query.all()

        users_list = [{"id": user.id, "name": user.name} for user in users]

        return jsonify(users_list), 200
    except Exception as e:
        print(f"Erro ao buscar usuários: {e}")
        return jsonify({"error": "Erro no servidor"}), 500

@main.route('/tasks', methods=['GET'])
def get_tasks():
    try:
        # Busca todas as tasks
        tasks = Task.query.all()

        tasks_list = [
            {
                "id": task.id,
                "title": task.title,
                "description": task.description,
                "status": task.status,
                "user": {"id": task.user.id, "name": task.user.name} if task.user else None
            } 
            for task in tasks
        ]

        return jsonify(tasks_list), 200
    except Exception as e:
        print(f"Erro ao buscar tasks: {e}")
        return jsonify({"error": "Erro no servidor"}), 500

@main.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    new_task = Task(
        title=data['title'],
        description=data.get('description', ''),
        status=int(data.get('status', 0)),  # Status padrão como 0 (Pendente)
        user_id=data['user_id']
    )
    
    db.session.add(new_task)
    db.session.commit()

    return jsonify({
        "id": new_task.id,
        "title": new_task.title,
        "description": new_task.description,
        "status": new_task.status,
        "user": {"id": new_task.user.id, "name": new_task.user.name} if new_task.user else None
    }), 201


@main.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    try:
        # Busca a tarefa pelo ID
        task = Task.query.get(task_id)

        if not task:
            return jsonify({"error": "Task não encontrada"}), 404

        # Exclui a tarefa
        db.session.delete(task)
        db.session.commit()

        return jsonify({"message": "Task excluída com sucesso!"}), 200
    except Exception as e:
        print(f"Erro ao excluir a task: {e}")
        return jsonify({"error": "Erro no servidor"}), 500

@main.route('/tasks/<int:task_id>/status', methods=['PUT'])
def update_task_status(task_id):
    try:
        data = request.get_json()
        new_status = data.get('status')

        # Busca a tarefa pelo ID
        task = Task.query.get(task_id)

        if not task:
            return jsonify({"error": "Task não encontrada"}), 404

        # Atualiza o status da tarefa
        task.status = new_status
        db.session.commit()

        return jsonify({"message": "Status da task atualizado com sucesso!"}), 200
    except Exception as e:
        print(f"Erro ao atualizar status da task: {e}")
        return jsonify({"error": "Erro no servidor"}), 500
    
@main.route('/tasks/<int:task_id>/title', methods=['PUT'])
def update_task_title(task_id):
    try:
        data = request.get_json()
        new_title = data.get('title')

        if not new_title:
            return jsonify({"error": "O título é obrigatório!"}), 400

        # Busca a tarefa pelo ID
        task = Task.query.get(task_id)

        if not task:
            return jsonify({"error": "Task não encontrada"}), 404

        # Atualiza o título da tarefa
        task.title = new_title
        db.session.commit()

        return jsonify({"message": "Título da task atualizado com sucesso!"}), 200
    except Exception as e:
        print(f"Erro ao atualizar o título da task: {e}")
        return jsonify({"error": "Erro no servidor"}), 500
    
@main.route('/tasks/<int:task_id>/description', methods=['PUT'])
def update_task_description(task_id):
    try:
        data = request.get_json()
        new_description = data.get('description')

        # Busca a tarefa pelo ID
        task = Task.query.get(task_id)

        if not task:
            return jsonify({"error": "Task não encontrada"}), 404

        # Atualiza a descrição da tarefa
        task.description = new_description
        db.session.commit()

        return jsonify({"message": "Descrição da task atualizada com sucesso!"}), 200
    except Exception as e:
        print(f"Erro ao atualizar a descrição da task: {e}")
        return jsonify({"error": "Erro no servidor"}), 500

@main.route('/tasks/<int:task_id>/user', methods=['PUT'])
def update_task_user(task_id):
    try:
        data = request.get_json()
        new_user_id = data.get('user_id')

        if not new_user_id:
            return jsonify({"error": "O ID do usuário é obrigatório!"}), 400

        # Busca a tarefa pelo ID
        task = Task.query.get(task_id)

        if not task:
            return jsonify({"error": "Task não encontrada"}), 404

        # Verifica se o novo usuário existe
        user = User.query.get(new_user_id)
        if not user:
            return jsonify({"error": "Usuário não encontrado"}), 404

        # Atualiza a atribuição de usuário da tarefa
        task.user_id = new_user_id
        db.session.commit()

        return jsonify({"message": "Usuário responsável pela task atualizado com sucesso!"}), 200
    except Exception as e:
        print(f"Erro ao atualizar o usuário da task: {e}")
        return jsonify({"error": "Erro no servidor"}), 500
