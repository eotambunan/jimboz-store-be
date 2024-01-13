const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    category: String,
    author: String,
    year: String,
    isbn: String,
    price: Number,
    description: String,
    image: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
