const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/egl-mgt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const registrationSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    lname: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

app.use(bodyParser.json());

app.post('/sign-up', async (req, res) => {
    const registration = new Registration(req.body);

    try {
        await registration.save();
        res.send('Registration successful');
    } catch (error) {
        console.log(error);
        res.send('Registration failed');
    }
});

app.listen(port, () => {
    console.log(`Server start at port ${port}`);
});
