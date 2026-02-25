import bcrypt
from backend.config.db import users_collection
from backend.models.user_model import create_user_document
from backend.utils.jwt_utils import generate_token
def register_user(email, password):

    if users_collection.find_one({"email": email}):
        return None, "User already exists"
    
    hashed_password = bcrypt.hashpw(
        password.encode(),
        bcrypt.gensalt()
    )

    user_doc = create_user_document(email, hashed_password)

    result = users_collection.insert_one(user_doc)

    return str(result.inserted_id), None

def login_user(email, password):

    user = users_collection.find_one({"email": email})

    if not user:
        return None, "Invalid email or password"
    
    if not bcrypt.checkpw(password.encode(), user["password"]):
        return None, "Invalid email or password"
    
    token = generate_token(user["_id"])

    return token, None


