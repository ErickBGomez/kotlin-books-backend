import express from "express";
import dotenv from "dotenv";
import booksRouter from "./routes/books.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Middleware to handle extended URL encoding
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/books", booksRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
