const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");
const userController = require("../controllers/users-controller");

router.post("/login",userController.login);
router.post("/signup",userController.signup);
router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
