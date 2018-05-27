const mongoose = require('mongoose');
//HIEP-12/05  automatically add two new fields with timestamps - createdAt and updatedAt to the schema.
const FollowingSchema = mongoose.Schema({
    image_url: String,
    fullName: String,
    accountName: String
});

module.exports = mongoose.model('Following', FollowingSchema);
