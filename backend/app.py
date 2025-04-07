import os
from firebase_admin import credentials, firestore, initialize_app
from datetime import datetime
import jinja2
from flask import Flask, render_template, request, redirect, url_for, jsonify, session
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import secrets
import json
import uuid
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = secrets.token_hex(24)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

class User(UserMixin):
    def __init__(self, id, password=None):
        self.id = id
        self.password = password

@app.route('/signup', methods=['POST'])
def signup():
    form_data = request.form.to_dict()
    data = form_data
    print(data)
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not email or not password or not name:
        return jsonify({'error': 'Email, name and password are required'}), 400

    user_ref = db.collection('users').document(email)
    if user_ref.get().exists:
        return jsonify({'error': 'User already exists'}), 400

    hashed_password = generate_password_hash(password)
    user_ref.set({
        'email': email,
        'password': hashed_password,
        'name': name
    })
    return redirect('/login')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    user_ref = db.collection('users').document(email)
    user_doc = user_ref.get()
    if not user_doc.exists:
        return jsonify({'error': 'Invalid email or password'}), 401

    user_data = user_doc.to_dict()
    if not check_password_hash(user_data['password'], password):
        return jsonify({'error': 'Invalid email or password'}), 401

    user = User(email)
    login_user(user)
    return redirect('/dashboard')

@login_manager.user_loader
def user_loader(email):
    user_ref = db.collection('users').document(email)
    user_doc = user_ref.get()
    if not user_doc.exists:
        return None

    user = User(email)
    return user

cred = credentials.Certificate("serviceAccountKey.json")
initialize_app(cred)
db = firestore.client()

if __name__ == '__main__':
    app.run(debug=True)