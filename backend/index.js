const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/dataSchema')
const bcrypt = require('bcryptjs');
require("dotenv").config();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

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
        res.send("inserted data..")
    } catch (err) {
        console.log("error while insert data" + err)
    }
});

// login route

// app.post('/login', async (req, res) => {
//     const email = req.body.email
//     const password = req.body.password

//     User.findOne({ email }, (err, user) => {
//         if (err) return res.status(500).json({ message: err.message });

//         if (!user) {
//             return res.status(401).json({ message: 'Authentication failed. User not found.' });
//         }

//         user.comparePassword(password, (err, isMatch) => {
//             if (err) return res.status(500).json({ message: err.message });

//             if (!isMatch) {
//                 return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
//             }
//             res.status(200).json({ message: 'Authentication successful.' });
//         })
//     })

// })

app.post("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        user.isMatchPassword((password), (isMatch) => {
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }
            res.json({ message: 'Login successful' });
        })
       
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
}
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});