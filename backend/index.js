const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/dataSchema')
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/egl-mgt-react', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.post('/insert', async (req, res) => {
    const Email = req.body.email
    const Password = req.body.password
    const Fname = req.body.fName
    const Lname = req.body.lName

    const formData = new User({
        email: Email,
        password: Password,
        fName: Fname,
        lName: Lname
    })


    try {
        await formData.save();
        const token = jwt.sign({ userId: formData._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ token });
        res.send("inserted data..")
    } catch (err) {
        console.log("error while insertubg" + err)
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});