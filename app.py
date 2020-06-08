from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/', methods=['GET', 'POST'])


def index():
    # if request.method == 'GET':
    #     pass
    # if request.method == 'POST':
    #     name = request.form.get('name')
    #     post = request.form.get('post')
    #     create_post(name, post)

    # posts = get_posts()

    return render_template('index.html')