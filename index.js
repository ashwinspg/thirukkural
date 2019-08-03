const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mongoURI = "mongodb://root:1330kural@ds257372.mlab.com:57372/thirukkural-prod";

require('./models/Kural');

mongoose.connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());

require('./routes/mainRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);