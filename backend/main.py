from flask import Flask

app = Flask(__name__)

products = []

@app.route("/add/<string:product>")
def addProduct(product):
    products.append(product)
    return str(len(products) - 1)
@app.route("/get/<int:id>")
def getProduct(id):
    return products[id]

if __name__ == "__main__":
    app.run()
