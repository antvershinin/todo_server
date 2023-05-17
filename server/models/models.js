const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;