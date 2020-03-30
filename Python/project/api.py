#This File helps to display the records
#Run =
# $> from api import project
# $> project - Project.query.all()
# $> project
#   -This will provide you the id's
# USing for loop we can display values.
# $> for ex in project
# $> ... print(ex.project_name)
# $> ... Enter
# Leave records are not displayed, actually there is no need to display the records.

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
    project_start_date = db.Column('start_date', db.Unicode)
    project_end_date = db.Column('end_date', db.Unicode)

#Display User Details

class User(db.Model):
    __tablename__ = 'role'
    role_id = db.Column('role_id', db.Interget, primary_key = True)
    role_name = db.Column('role_name', db.Unicode)

#Display User Details
    __tablename__ = 'user'
    user_id = db.Column('user_id', db.Interget, primary_key = True)
    emp_id = db.Column('emp_id', db.Interget)
    username = db.Column('username', db.Unicode, unique=True)
    name = db.Column('name', db.Unicode)
    tags = db.Column('tags', db.Unicode)

#This Code in under development.
#Working on Relationship

#Association Table (Table - Project and User)

    logs = db.Table = ('subs',
        db.Column('user_id', db.Interget, db.ForeignKey('user.user_id')),
        db.Column('project_id', db.Interget, db.ForeignKey('project.project_id'))
)

#Diplay User logs details with many - to -many relationship

    project = db.relationship('')
    __tablename__ = 'user_logs_details'
    log_id = db.Column('log_id' , db.Interget, primary_key = True)
    log_user = db.relationaship('user', secondary = logs, backref = db.backref('logs', lazy = 'dynamic')) # lazy = help to load the data


