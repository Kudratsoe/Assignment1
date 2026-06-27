const {getAllBooks, getBookById} = require('../models/bookModel.js');

const getAllBooksJSON = (req, res) => {
    const books = getAllBooks();
    res.json(books)};

const getBookByIdJSON = (req, res) => {
    const book = getBookById(req.params.id);
    if (!book) {
        res.status(404).json({ error: 'Book not found' });
        } 
    else {
        res.json(book);
        }
    };

const getAllBooksEJS = (req, res) => {
    const books = getAllBooks();
    res.render('books', {books})
    };

module.exports = { getAllBooksJSON, getBookByIdJSON, getAllBooksEJS };
