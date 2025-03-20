import pool from "./pool.js";

const getBooks = async () => {
  const { rows } = await pool.query("SELECT * FROM books");
  return rows;
};

const getBookById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  return rows;
};

const getBooksByTitle = async (title) => {
  const { rows } = await pool.query("SELECT * FROM books WHERE title = $1", [
    title,
  ]);
  return rows;
};

const getBooksByAuthor = async (author) => {
  const { rows } = await pool.query("SELECT * FROM books WHERE author = $1", [
    author,
  ]);
  return rows;
};

const createBook = async (title, author, pages) => {
  await pool.query(
    "INSERT INTO books (title, author, pages) VALUES ($1, $2, $3)",
    [title, author, pages]
  );

  return { title, author, pages };
};

const updateBook = async (id, title, author, pages) => {
  await pool.query(
    "UPDATE books SET title = $1, author = $2, pages = $3 WHERE id = $4",
    [title, author, pages, id]
  );
};

const deleteBook = async (id) => {
  await pool.query("DELETE FROM books WHERE id = $1", [id]);
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
