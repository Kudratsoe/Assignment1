const express = require('express');
const router = express.Router ();

const {getAllBooksJSON, getBookByIdJSON, getAllBooksEJS} = require ('../controllers/BookController'); 

router.get('/books', getAllBooksJSON);
router.get('/books/:id', getBookByIdJSON);
router.get('/ejs/books', getAllBooksEJS);

module.exports = router;

