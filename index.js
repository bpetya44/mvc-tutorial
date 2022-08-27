const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

//MongoDB conection
const database = process.env.MONGO_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('db connected'))
.catch(err => console.log(err));

app.set('view engine', 'ejs');

//BodyParsing
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', require('./routes/login'));


const PORT = process.env.PORT || 2121;

app.listen(PORT, console.log("Server is running on port: " + PORT))