const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randomName(len) {
    var string = "";
    var charLen = characters.length;
    for(let i = 0; i<len; i++) {
        string += characters.charAt(Math.floor(Math.random() * charLen));
    }

    return string;
}

var product = {
    name: randomName(10),
    image: "https://i.pravatar.cc/300"
};

function getProducts(len) {
    var products = [];
    for(let i = 0; i < len; i++) {
        product.push(product);
    }
    return products;
}

router.get("/", (req, res) => {
    res.json(
        {
            "product": getProducts(10)
        }
    );    
});

router.get("products/catalog", (req,res) => {
    res.json(
        {
            "products": getProducts(10)
        }
    );
});


app.use("/.netlify/functions/index", router);
module.exports.handler = serverless(app);

