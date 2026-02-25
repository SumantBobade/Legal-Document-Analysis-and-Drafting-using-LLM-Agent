from flask import Blueprint, request, jsonify
from backend.services.auth_service import register_user, login_user

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.json

    if not data or "email" not in data or "password" not in data:
        return jsonify({"error": "Email and password required"}), 400

    user_id, error = register_user(
        data["email"],
        data["password"]
    )

    if error:
        return jsonify({"error": error}), 400

    return jsonify({
        "message": "User registered successfully"
    }), 201


@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    if not data or "email" not in data or "password" not in data:
        return jsonify({"error": "Email and password required"}), 400

    token, error = login_user(
        data["email"],
        data["password"]
    )

    if error:
        return jsonify({"error": error}), 401

    return jsonify({
        "token": token
    }), 200