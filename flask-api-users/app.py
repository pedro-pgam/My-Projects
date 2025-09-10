from flask import Flask, request, jsonify

app = Flask(__name__)
users = []

@app.route("/users", methods=["GET"])
def get_users():
    return jsonify(users)

@app.route("/users", methods=["POST"])
def create_user():
    user = request.json
    users.append(user)
    return jsonify(user), 201

@app.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    users[user_id] = request.json
    return jsonify(users[user_id])

@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    users.pop(user_id)
    return '', 204

if __name__ == "__main__":
    app.run(debug=True)
