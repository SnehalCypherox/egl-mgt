const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const ReactFormDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
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
    try {
        const salt = await bcrypt.genSalt(10);
        // Generate a password hash (salt + hash)
        const passwordHash = await bcrypt.hash(this.password, salt);
        // Re-assign hashed version over original, plain text password
        this.password = passwordHash;
        next();
    } catch (error) {
        next(error);
    }
})

ReactFormDataSchema.method.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
}

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;