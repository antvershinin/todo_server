const Todo = require("../models/models");

module.exports.getAllTodos = (req, res) => {
  Todo.find({})
    .then((todo) => res.json(todo))
    .catch((err) => console.log(err));
};

module.exports.addTodo = (req, res) => {
  Todo.create(req.body)
    .then((data) => res.json({ message: "Todo added successfully", data }))
    .catch((err) => console.log(err));
};

module.exports.updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({ message: "todo deleted successfully", data }))
    .catch((err) => console.log(err));
};

module.exports.completeTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) => console.log(err));
};

module.exports.completeAll = (req, res) => {
  {
    Todo.updateMany(req.body)
      .then((data) => res.json({ message: "updated successfully", data }))
      .catch((err) => console.log(err));
  }
};

module.exports.deleteAll = (req, res) => {
  {
    Todo.deleteMany({})
      .then((data) => res.json({ message: "updated successfully", data }))
      .catch((err) => console.log(err));
  }
};
