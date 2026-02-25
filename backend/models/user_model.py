from datetime import datetime

def create_user_document(email, hashed_password):
    return {
        "email": email,
        "password": hashed_password,
        "created_at": datetime.utcnow()
    }