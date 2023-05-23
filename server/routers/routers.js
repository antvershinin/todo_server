const express = require("express");
const router = express.Router();

const {
  getAllTodos,

  addTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  completeAll,
  deleteAll,
} = require("../controllers/controllers");

router.get("/todos", getAllTodos);

router.post("/", addTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

router.put("/:id", completeTodo);

router.put("/", completeAll);

router.delete("/", deleteAll);

module.exports = router;
