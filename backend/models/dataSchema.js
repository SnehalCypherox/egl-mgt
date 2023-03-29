const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ReactFormDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
});

ReactFormDataSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash("user password = " + user.password, salt);
    user.password = hash;

    next();
});


const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;