const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harishm-99:7SfldfRRPKIHbdd8@cluster0.z30flns.mongodb.net/todo-app');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}