// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const RegisterModel = require('./models/Register')

// const app = express()
// app.use(cors(
//     {
//         origin: ["https://login-nine-opal.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));
// app.use(express.json())

// mongoose.connect('mongodb+srv://kushsahu144114:Q1aZGaVCJ9kAAje6@cluster0.peog2iz.mongodb.net');


// app.get("/", (req, res) => {
//     res.json("Hello");
// })
// app.post('/register', (req, res) => {
//     const {name, email, password} = req.body;
//     RegisterModel.findOne({email: email})
//     .then(user => {
//         if(user) {
//             res.json("Already have an account")
//         } else {
//             RegisterModel.create({name: name, email: email, password: password})
//             .then(result => res.json(result))
//             .catch(err => res.json(err))
//         }
//     }).catch(err => res.json(err))
// })





// app.listen(3001, () => {
//     console.log("Server is Running")
// })





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');

const app = express();

// Middleware to enable CORS
app.use(cors({
    origin: "https://login-client-theta.vercel.app", // Allow requests from this origin
    methods: ["POST", "GET"], // Allow only specified HTTP methods
    credentials: true // Allow cookies to be sent cross-domain
}));
app.use(express.json());

mongoose.connect('mongodb+srv://kushsahu144114:Q1aZGaVCJ9kAAje6@cluster0.peog2iz.mongodb.net');

app.get("/", (req, res) => {
    res.json("Hello");
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already have an account");
            } else {
                RegisterModel.create({ name: name, email: email, password: password })
                    .then(result => res.json(result))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is Running");
});
