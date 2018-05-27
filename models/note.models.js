const mongoose = require('mongoose');
//HIEP-12/05  automatically add two new fields with timestamps - createdAt and updatedAt to the schema.
const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
        timestamps: true
    });

module.exports = mongoose.model('Note', NoteSchema);
