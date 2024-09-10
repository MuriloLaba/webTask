from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
    db.init_app(app)

    # Importando os modelos antes de criar as tabelas
    from .models import User  # Adicione isso explicitamente

    # Força a recriação das tabelas
    with app.app_context():
        # db.drop_all()
        db.create_all()

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
