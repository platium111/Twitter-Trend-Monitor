const mongoose = require('mongoose');
const VideoSchema = mongoose.Schema({
    title: String,
    image_url: String,
    tags: [String],
    published_at: { type: Date }
});

module.exports = mongoose.model('Video', VideoSchema);
