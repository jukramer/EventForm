from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'App is running!'

@app.route('/belgium')
def goodbye():
    return "Belgium sucks"

@app.route('/api/submit', methods=['POST'])
def submit():
    print('received request')
    data = request.get_json()
    print(data)
    
    return jsonify({"message": "Event registered!"})