from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_pyfile('./config.cfg')
db = SQLAlchemy(app)

#Display Project Details

class Project(db.Model):
    __tablename__ = 'project'
    project_id = db.Column('project_id', db.Integer, primary_key = True)
    project_name = db.Column('project_name', db.Unicode)