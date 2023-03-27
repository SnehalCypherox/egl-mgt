const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Register = require('./models/dataSchema')

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/egl-mgt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    const Email = req.body.form.email
    const Password = req.body.form.password
    const Fname = req.body.form.email
    const Lname = req.body.form.email

    const formData = new Register({
        email: Email,
        password: Password,
        fname: Fname,
        lname: Lname
    })


    try {
        await formData.save();
        res.send("inserted data..")
    } catch (err) {
        console.log("error while inserting data = " + err)
    }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});