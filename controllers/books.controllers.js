import * as db from "../db/queries.js";

const getBooks = async (req, res, next) => {
  try {
    const books = await db.getBooks();
    res.json(books);
  } catch (e) {
    next(e);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.body;
    const book = await db.getBookById(id);
    res.json(book);
  } catch (e) {
    next(e);
  }
};

const getBooksByTitle = async (req, res, next) => {
  try {
    const { title } = req.body;
    const book = await db.getBooksByTitle(title);
    res.json(book);
  } catch (e) {
    next(e);
  }
};

const getBooksByAuthor = async (req, res, next) => {
  try {
    const { author } = req.body;
    const book = await db.getBooksByAuthor(author);
    res.json(book);
  } catch (e) {
    next(e);
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, author, pages } = req.body;
    await db.createBook(title, author, pages);
    res.json({ message: "Book created successfully" });
  } catch (e) {
    next(e);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id, title, author, pages } = req.body;
    await db.updateBook(id, title, author, pages);
    res.json({ message: "Book updated successfully" });
  } catch (e) {
    next(e);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.body;
    await db.deleteBook(id);
    res.json({ message: "Book deleted successfully" });
  } catch (e) {
    next(e);
  }
};

export {
  getBooks,
  getBookById,
  getBooksByTitle,
  getBooksByAuthor,
  createBook,
  updateBook,
  deleteBook,
};
