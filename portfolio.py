from flask import *
app11=Flask(__name__)



@app11.route("/")
def home():
    return render_template("index.html")

if __name__=="__main__":
    app11.run(debug=False,host='0.0.0.0')
