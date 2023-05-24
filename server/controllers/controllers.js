const Todo = require("../models/models");

const filterName = (filter) => {
  if (filter === "Completed") {
    return { completed: true };
  }
  if (filter === "Active") {
    return { completed: false };
  }
  if (filter === "All" || filter === "") {
    return {};
  }
};

module.exports.getAllTodos = async (req, res) => {
  try {
    const filterValue = req.query.filter;
    const filter = filterName(filterValue);
    const todos = await Todo.find(filter);
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
};

module.exports.addTodo = async (req, res) => {
  try {
    const { text } = req.body.data;
    const newTodo = await Todo.create({ text });
    res.send(newTodo);
    if (newTodo) res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    const todo = await Todo.findByIdAndDelete(_id);
    if (todo) res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

module.exports.editTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });

    if (todo) res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

module.exports.completeAll = async (req, res) => {
  try {
    const { completed } = req.body;
    await Todo.updateMany({ completed });
    const todos = await Todo.find({});
    res.send(todos);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

module.exports.deleteAll = async (req, res) => {
  try {
    await Todo.deleteMany({});
    const todos = await Todo.find({});
    res.send(todos);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};
