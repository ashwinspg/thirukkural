const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/config');

require('./models/Kural');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, 
        { useNewUrlParser: true, useFindAndModify: false , useUnifiedTopology: true }
    ).then(() => {
        console.log("Database Connected...")
        init()
    }).catch((err) => {
        console.error("Database Connection error: ", err)
        process.exit(1)
    });

function init() {
    const app = express();

    app.use(bodyParser.json());

    require('./routes/mainRoutes')(app);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}