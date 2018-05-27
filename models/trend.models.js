const mongoose = require('mongoose');
//HIEP-12/05  automatically add two new fields with timestamps - createdAt and updatedAt to the schema.
const TrendsSchema = mongoose.Schema({
    keyword: String,
    percent: Number
});

module.exports = mongoose.model('Trend', TrendsSchema);
