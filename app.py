from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/privacy-policy')
def policy():
    return render_template('policy.html')

if __name__ == '__main__':
    app.run(debug=True) #Si può considerare la medesima string anche per deploy!
