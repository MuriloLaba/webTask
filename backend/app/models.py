from . import db

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

    # Relacionamento com a tabela de tarefas
    tasks = db.relationship('Task', backref='user', lazy=True)


class Task(db.Model):
    __tablename__ = 'task'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=True)  # A descrição pode ser vazia
    status = db.Column(db.Integer, nullable=False, default=0)

    # Chave estrangeira para associar a tarefa a um usuário
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
