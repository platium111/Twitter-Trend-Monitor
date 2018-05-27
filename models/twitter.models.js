const mongoose = require('mongoose');
//HIEP-12/05  automatically add two new fields with timestamps - createdAt and updatedAt to the schema.
const TwitterSchema = mongoose.Schema({
    image_url: String,
    fullName: String,
    accountName: String,
    content: String,
    postDate: Date
});

module.exports = mongoose.model('Twitter', TwitterSchema);
