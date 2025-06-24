from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    CORS(app)

    from routes.auth import auth_bp
    from routes.add_product import add_product_bp
    from routes.edit_product import edit_product_bp
    from routes.list_products import list_products_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(add_product_bp)
    app.register_blueprint(edit_product_bp)
    app.register_blueprint(list_products_bp)

    return app
