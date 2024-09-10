from flask import Blueprint, jsonify, request
from .models import User
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
