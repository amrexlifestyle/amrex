from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='assets')

# Configure SQLite database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)

# Define a model (example)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/authentication-login')
def authentication_login():
    return render_template('authentication-login.html')

@app.route('/authentication-register')
def authentication_register():
    return render_template('authentication-register.html')

@app.route('/borrow')
def borrow():
    return render_template('borrow.html')

@app.route('/botbarner')
def botbarner():
    return render_template('botbarner.html')

@app.route('/deposit')
def deposit():
    return render_template('deposit.html')

@app.route('/myprofile')
def icon_tabler():
    return render_template('myprofile.html')

@app.route('/sample-page')
def sample_page():
    return render_template('sample-page.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/p2pbuy')
def ui_alerts():
    return render_template('p2pbuy.html')

@app.route('/ui-buttons')
def ui_buttons():
    return render_template('ui-buttons.html')

@app.route('/ui-card')
def ui_card():
    return render_template('ui-card.html')

@app.route('/ui-forms')
def ui_forms():
    return render_template('ui-forms.html')
@app.route('/rewards')
def rewards():
    return render_template('rewards.html')

@app.route('/community')
def ui_typography():
    return render_template('community.html')

@app.route('/market')
def market():
    return render_template('market.html')

if __name__ == '__main__':
    # Ensure database tables are created
    with app.app_context():
        db.create_all()
    # Run the app on all available interfaces
    app.run(debug=True, host='0.0.0.0')
