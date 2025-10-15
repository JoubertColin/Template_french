
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/classes")
def classes():
    return render_template("aula_02.html")

@app.route("/supplementaire")
def supplementaire():
    return render_template("sobre.html")

@app.route("/chansons")
def chansons():
    return render_template("aula_01.html")




if __name__ == "__main__":
    app.run(debug=True)