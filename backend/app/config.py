import os

class Config:
    BASE_DIR = os.path.abspath(os.path.dirname(os.path.realpath(__file__)))
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(BASE_DIR, 'users.db')}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True 