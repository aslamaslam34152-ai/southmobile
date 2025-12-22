const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const loginmodel = require("./models/loginModel");
const registermodel = require('./models/registerModel')

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })
const Db = require('./config/config');
Db.connectDb();
app.use(express.urlencoded({ extended: true }));
const products = require('./routes/product');
const orders = require('./routes/order');

// const login=require('./routes/login');
// const register=require('./routes/register')

app.use(express.json());
app.use(cors());
app.use('/api', products);
app.use('/api', orders);


app.post('/register', (req, res) => {

    registermodel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => console.log(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    loginmodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('success')
                }
                else {
                    res.json('password is incorrect')
                }
            }
            else {
                res.json('no record exists')
            }
        })
})


app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} `)
});