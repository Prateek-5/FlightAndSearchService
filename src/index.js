const express = require("express");
const bodyParser = require("body-parser");

// const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(3001, async () => {
        console.log(`Server started at ${3001}`);
    });
}

setupAndStartServer();
