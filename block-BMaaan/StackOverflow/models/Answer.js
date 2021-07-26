let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let answerSchema = new Schema({
  title: { type: String, require: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  createdBy: { type: mongoose.types.ObjectId, ref: 'User' },
  questionId: { type: mongoose.types.ObjectId, ref: 'Question' },
});

let Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;