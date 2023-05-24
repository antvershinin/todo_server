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

router.get("/todos", getAllTodos);

router.post("/", addTodo);

router.delete("/", deleteTodo);

router.put("/completeAll", completeAll);

router.delete("/deleteAll", deleteAll);

router.patch("/:_id", editTodo);

module.exports = router;
