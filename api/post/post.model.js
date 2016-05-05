var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    title: { type: String, required: true },
    data: { type: String, required: true },
    createdAt: { type: Date, required: true },
    by: { type: String, required: true }
 
});

module.exports = mongoose.model('posts', EventSchema);
