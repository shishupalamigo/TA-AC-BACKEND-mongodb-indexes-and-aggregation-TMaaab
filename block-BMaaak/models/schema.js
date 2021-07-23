var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {
        city: String,
        state: String,
        country: String,
        pin: Number
    }
});

userSchema.index({ email: 1}, { unique: true });
userSchema.index({ username: 1}, { unique: true });

userSchema.index({ country: 1}, { state: 1 });

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String]
});

articleSchema.index({ tags: 1 })

articleSchema.index({ title: "text" });

articleSchema.index({ title: "text", description: "text" });

var User = mongoose.model('User', userSchema);

var Article = mongoose.model('Article', articleSchema);

module.exports = { User, Article };