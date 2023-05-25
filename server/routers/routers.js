const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  addTodo,
  deleteTodo,
  completeAll,
  deleteAll,
  editTodo,
} = require("../controllers/controllers");

router.get("/", getAllTodos);

router.post("/", addTodo);

router.delete("/", deleteTodo);

router.put("/completeAll", completeAll);

router.delete("/deleteAll", deleteAll);

router.patch("/:id", editTodo);

module.exports = router;
