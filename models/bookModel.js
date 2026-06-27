const books = require('../bookdata.json');

const getAllBooks = () => {return books};
const getBookById = (id) => {return books.find ((book) => book.id === +(id));};

module.exports = {getAllBooks, getBookById};