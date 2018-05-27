//HIEP-12/5 App Schema
//[tut-mongodb schema type] http://mongoosejs.com/docs/schematypes.html
const mongoose = require('mongoose');
const AppSchema = mongoose.Schema({
    app_name: String,
    image_url: String,
    created_at: Date,
    tags: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('App', AppSchema);
