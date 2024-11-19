const BookModel = require("../Models/book");

// Create a new book
const postbook = async (req, res) => {
  console.log(req.body);
  try {
    const newBook = await BookModel.create(req.body);
    res.status(201).send("Book created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating the book: " + error.message);
  }
};

// Get all books
const getbook = async (req, res) => {
  try {
    const data = await BookModel.find();
    res.status(200).json(data);  // Return a JSON array of books
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching books: " + error.message);
  }
};

// Get a single book by ID
const singledata = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await BookModel.findById(id);
    if (!data) {
      return res.status(404).send("Book not found");
    }
    res.status(200).json(data);  // Return the book data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching the book: " + error.message);
  }
};

// Delete a book by ID
const deletdata = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await BookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send("Book deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting the book: " + error.message);
  }
};

// Update book data
const updatedata = async (req, res) => {
  const { id } = req.params;
  const { title, author, price, description, img } = req.body; // Ensure correct field names
  try {
    // Update only the fields that are passed in the request body
    const updatedBook = await BookModel.findByIdAndUpdate(
      id,
      { $set: { title, author, price, description, img } },
      { new: true } // Return the updated document
    );
    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send("Book data updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating the book: " + error.message);
  }
};

module.exports = { getbook, deletdata, updatedata, singledata, postbook };
