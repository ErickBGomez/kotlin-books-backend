import * as controller from "../controllers/books.controllers.js";
import errorMiddleware from "../middlewares/error.middleware.js";
import { Router } from "express";

const router = Router();

router.get("/", controller.getBooks, errorMiddleware);
router.get("/:id", controller.getBookById, errorMiddleware);
router.get("/title/:title", controller.getBooksByTitle, errorMiddleware);
router.get("/author/:author", controller.getBooksByAuthor, errorMiddleware);
router.post("/", controller.createBook, errorMiddleware);
router.put("/:id", controller.updateBook, errorMiddleware);
router.delete("/:id", controller.deleteBook, errorMiddleware);

export default router;
