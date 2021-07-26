var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    
        id: { type: String },
        index: Number,
        name: String,
        isActive: Boolean,
        registered: { type: Date },
        age: Number,
        gender: String,
        eyeColor: String,
        favoriteFruit: String,
        company: {
          title: String,
          email: String,
          phone: String,
          location: { country: String, 
            address: String 
            }
        },
        tags: [String]
      
}) ;
userSchema.index({ name: 'text' });

var User = mongoose.model('User', userSchema);

module.exports = User;
