const mongoose = require('mongoose');
//HIEP-12/05  automatically add two new fields with timestamps - createdAt and updatedAt to the schema.
const UserSchema = mongoose.Schema({
    name: String,
    someID: String
});

module.exports = mongoose.model('User', UserSchema);
