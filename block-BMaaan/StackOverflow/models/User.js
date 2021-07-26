var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question'}],
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer'}],
    reputation: Number
});

var User = mongoose.model('USer', userSchema);

module.exports = User;
