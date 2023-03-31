const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ReactFormDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        min: [6],
    },
    password: {
        type: String,
        required: true,
        max: [4],
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


ReactFormDataSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
};

ReactFormDataSchema.methods.isMatchPassword = async function (password) {
    try {
        bcrypt.compare(password, User.password, function (err, isMatch) {
            if (err) {
                console.error(err);
            }

            if (isMatch) {
                console.log('Passwords match');
            } else {
                console.log('Passwords do not match');
            }
        });
    }
    catch (err) {
        throw err;
    }
}

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;