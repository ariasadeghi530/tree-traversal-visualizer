from flask import Flask, jsonify
from flask_cors import CORS

# config
DEBUG = True

# create the app
app = Flask(__name__)
app.config.from_object(__name__)

# cors enable
CORS(app, resources={r'/*' : {'origins': '*'}})

@app.route('/', methods=['GET'])
def home_page():
    return jsonify('Hello, World!')

if __name__ == '__main__':
    app.run()