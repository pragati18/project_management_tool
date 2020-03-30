# Swagger file which helps to display the docs - localhost:5000/docs
import werkzeug
werkzeug.cached_property = werkzeug.utils.cached_property
from flask import Flask, Blueprint
from flask_restplus import Resource, Api, fields
from marshmallow import Schema, fields as ma_fields, post_load

app = Flask(__name__)
blueprint = Blueprint('api', __name__, url_prefix='/')
api = Api(blueprint, doc='/docs')
app.register_blueprint(blueprint)

class TheProject(object):
    def __init__(self, project, project_manager, start_date, end_date):
        self.project = project
        self.project_manager = project_manager
        self.start_date = start_date
        self.end_date = end_date

    def __repr__(self):
        return '{} is the project. {} is the project_manager. {} is the start date. {} is the end date'.format(self.project, self.project_manager, self.start_date, self.end_date)

class TheUser(object):
    def __init__(self, id, username, name, role, tags):
        self.id = id
        self.username = username
        self.name = name
        self.role = role
        self.tags = tags

    def __repr__(self):
        return '{} is the Username. {} is the name. {} is the Role. {} is the tags'.format(self.username, self.name, self.role, self.tags)



class ProjectSchema(Schema):
    project = ma_fields.String()
    project_manager = ma_fields.String()
    start_date = ma_fields.String()
    end_date = ma_fields.String()

class UserSchema(Schema):
    username = ma_fields.String()
    name = ma_fields.String()
    role = ma_fields.String()
    tags = ma_fields.String()
    #password = ma_fields.String()
    #emp_id = ma_fields.Integer()

a_project = api.model('Project', {'project': fields.String("Enter the Project Name."),
                                  'project_manager': fields.String("Enter the Project's Manager Name."),
                                  'start_date': fields.String(default='2014-08-25'),
                                  'end_date': fields.String(default='2014-08-25'),
                                 })

a_user = api.model('User', {
                          'username': fields.String("Enter the Username."),
                          'name': fields.String("Enter the Name."),
                          'role': fields.String(default="admin"),
                          'tags': fields.String(default="HTML,JAVA"),
                                 })

projects = []
users = []
#internal = {'project': 'Tapclicks', 'project_manager' : 'Pragati', 'start_date':'28 March 2020', 'end_date':'29 Feb 2020'}
project_data = TheProject(project='Tapclicks', project_manager='Pragati', start_date='10th Jan 2020', end_date='20th Jan 2020')
projects.append(project_data)

user_data = TheUser(id='1', username='pragati18', name = 'Pragati', role = 'Admin', tags="HTML,CSS")
users.append(user_data)

@api.route('/project-details')

class Addproject(Resource):
    #@api.marshal_with(a_project, envelope='data')
    def get(self):
        schema = ProjectSchema(many=True)
        return schema.dump(projects)

@api.route('/project-add')
class Insertproject(Resource):
    @api.expect(a_project)
    def post(self):
        schema = ProjectSchema()

        new_project = schema.load(api.payload)
        print(new_project)
        projects.append(new_project)
        return {'result': 'Project added'}, 201

@api.route('/user-details')

class Adduser(Resource):
    def get(self):
        schema = UserSchema(many= True)
        return schema.dump(users)

@api.route('/user-add')
class Insertuser(Resource):
    @api.expect(a_user)
    def post(self):
        schema = UserSchema()

        new_user = schema.load(api.payload)
        new_user['id'] = len(users) + 1
        #print(new_user)
        users.append(new_user)
        return {'result': 'User added'}, 201

if __name__ == '__main__':
    app.run(debug=True)