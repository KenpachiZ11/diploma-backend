require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended : true});
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());

const homeRouter = require('./routes/home-route.js');
const formRouter = require('./routes/form-route.js');
const aboutRouter = require('./routes/about-route.js');
const contactsRouter = require('./routes/contacts-route.js');
const feedbackAdminRouter = require('./routes/feedbackAdmin-route.js');

app.use(homeRouter);
app.use(formRouter);
app.use(aboutRouter);
app.use(contactsRouter);
app.use(feedbackAdminRouter);

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@diplomaproject.bhvad90.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('MongoBD connect'))
    .catch((err) => console.log(err, 'error'))

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server start on PORT:${PORT}`);
});
