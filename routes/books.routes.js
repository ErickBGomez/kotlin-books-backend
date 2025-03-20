import * as controller from "../controllers/books.controllers";
import { Router } from "express";

const router = Router();

router.get("/", controller.getBooks);
router.get("/:id", controller.getBookById);
router.get("/title/:title", controller.getBooksByTitle);
router.get("/author/:author", controller.getBooksByAuthor);
router.post("/", controller.createBook);
router.put("/:id", controller.updateBook);
router.delete("/:id", controller.deleteBook);

export default router;
