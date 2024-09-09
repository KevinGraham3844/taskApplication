const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String
    }
});

userSchema.set('toJSON', {
    transform: (_document, returnedOjbect) => {
        returnedOjbect.id = returnedOjbect._id.toString();
        delete returnedOjbect._id;
        delete returnedOjbect.__v;
        delete returnedOjbect.passwordHash;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;