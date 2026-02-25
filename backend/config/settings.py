import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "super-secret-dev-key")
    JWT_EXPIRY_HOURS = 6
    
    MONGO_URI = os.getenv(
        "MONGO_URI",
        "mongodb://localhost:27017/legal_ai"
    )