import jwt
from datetime import datetime, timedelta
from backend.config.settings import Config

def generate_token(user_id):
    payload = {
        "user_id": str(user_id),
        "exp": datetime.utcnow() + timedelta(hours = Config.JWT_EXPIRY_HOURS)
    }

    token = jwt.encode(payload, Config.SECRET_KEY, algorithm = "HS256")
    return token

def verify_token(token):
    decoded = jwt.dedcode(
        token,
        Config.SECRET_KEY,
        algorithms = ["HS256"]
    )

    return decoded