const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, 'must provide Author name'],
        trim: true,
        maxLength: [20, 'must be less than 20 characters long'],
    },
    module: {
        type: String,
        required: [true, 'must provide Module'],
        trim: true,
        maxLength: [20, 'must be less than 20 characters long'],
    },
    content: {
        type: String,
        trim: true,
    },
    dueDate: {
        type: String,
        required: [true, 'must provide Due Date'],
        trim: true,
    },
    done: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Task', TaskSchema);
