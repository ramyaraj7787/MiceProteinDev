from flask import Flask, render_template, redirect, request
from operate import *

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])  # To render Homepage
def home_page():
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])  # To render Loginpage
def login():
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])  # To render Register
def register():
    return render_template('register.html')

@app.route('/home', methods=['GET', 'POST'])  # To render Home
def home():
     return render_template('home.html', user="Test", role="admin")


@app.route('/predict', methods=['GET', 'POST'])  # To render Predict
def predict():
    return render_template('predict.html')

@app.route('/train', methods=['GET', 'POST'])  # To render Train
def train():
    return render_template('train.html')

@app.route('/feedback', methods=['GET', 'POST'])  # To render Feedback
def feedback():
    return render_template('feedback.html')

@app.route('/profile', methods=['GET', 'POST'])  # To render Profile
def profile():
    return render_template('profile.html')

@app.route('/activity', methods=['GET', 'POST'])  # To render Activity
def activity():
    return render_template('activity.html')

@app.route('/result', methods=['GET', 'POST'])  # To render Activity
def activity():
    output = getResult(0)
    return render_template('result.html', genotype=output[0], behavior=output[1], treatment=output[2], mice_class=output[3] )


if __name__ == '__main__':
    app.run(debug=True)
