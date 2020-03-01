from flask import Flask, request
import requests as r
import os
app = Flask(__name__)




@app.route("/")
def renderProduct():
    #return """<html><head><title>""" + os.environ["title"] + """</title></head><form id="1" method="POST"><input name="getID"/><br><input name="addID"><input type="submit"></form></html>"""
    return """<html><head><title>Formularz</title></head><form id="1" method="POST"><input name="getID"/><br><input name="addID"><input type="submit"></form></html>"""

@app.route("/", methods=["POST"])
def queryAndRender():
    builded = "<html>"
    if request.form["getID"] is not None:
        resp = r.get("http://localhost:8090/get/" + request.form["getID"])
        builded = builded + "PRODUCT:" +  resp.text + "<br>"

    if request.form["addID"] is not None:
        resp = r.get("http://localhost:8090/add/" + request.form["addID"])
        builded = builded + "ADDED ID:" +  resp.text + "<br>"

    builded = builded +  """<html><head><title>Formularz</head></title><form id="1" method="POST"><input name="getID"/><br><input name="addID"><input type="submit"></form></html>"""

    return builded

if __name__ == "__main__":
    app.run()
