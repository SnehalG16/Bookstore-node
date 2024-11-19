const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    year: Number,
    img: { type: String, required: true }, 
});

const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;
