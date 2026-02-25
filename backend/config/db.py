from pymongo import MongoClient
from backend.config.settings import Config

client = MongoClient(Config.MONGO_URI)
db = client.get_database()

users_collection = db.users