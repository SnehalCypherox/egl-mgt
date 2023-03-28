const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/dataSchema')
const bcrypt = require('bcryptjs');

require('dotenv');

const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.post('/insert', async (req, res) => {
    const Email = req.body.email
    const Password = req.body.password
    const Fname = req.body.fName
    const Lname = req.body.lName

    
    const securePassword = async (password) => {
        const passwordHash = await bcrypt.hash(password, 10);
        console.log("Hash password = " + passwordHash);

        const passwordMatch = await bcrypt.compare(password, passwordHash);
        console.log(passwordMatch);
    }
    securePassword('');

    const formData = new User({
        email: Email,
        password: Password,
        fName: Fname,
        lName: Lname
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch (err) {
        console.log("error while insert data" + err)
    }
});

// login route
app.post('/login', async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = bcrypt.compare(password);
        console.log(isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, 'secret_key');

        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});