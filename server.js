const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const userRoutes = require('./routes/api/users');
const postRoutes = require('./routes/api/posts');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log("MongoDB Connected..."))
            .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', userRoutes);
app.use('/posts', postRoutes);


const port = process.env.PORT || 4000;
app.listen(port, console.log(`Server running on port ${port}`));