
from app import create_app, db

def seed_all():
    print("Seed logic goes here...")

if __name__ == '__main__':
    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()
        seed_all()
