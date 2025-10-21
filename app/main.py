from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello, world!'

@app.route('/belgium')
def goodbye():
    return "Belgium sucks"

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    eventName = data.get('eventName')
    eventHead = data.get('eventHead')
    print(f'Received: {eventName}, {eventHead}')
    
    return jsonify({"message": "Event registered!"})

# if __name__ == '__main__':
#     app.run(debug=True)