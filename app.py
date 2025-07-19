from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Define the route for the main page
@app.route('/')
def home():
    # This will look for 'index.html' in the 'templates' folder
    return render_template('index.html')

# This allows you to run the app directly from the command line
if __name__ == '__main__':
    app.run(debug=True)