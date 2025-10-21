from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, world!'

@app.route('/belgium')
def goodbye():
    return "Belgium sucks"

