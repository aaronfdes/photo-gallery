var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new mongoose.Schema({
    name: String,
    coverImage: { type: String, default: "" },
    published: { type: Boolean, default: true },
    listImages: [String],
    createdDate: { type: Date, default: Date.now },
    modifiedDate: Date,
    deletedDate: Date,
    views: { type: Number, default: 0 }
});

module.exports = mongoose.model('album', albumSchema);