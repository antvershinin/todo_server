const Todo = require("../models/models");

module.exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
};

module.exports.addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({ text: "олоо" });
    console.log(req.data);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
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
