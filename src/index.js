const express = require("express");
const bodyParser = require("body-parser");
const DB=require('./models/index')
const sequelize = require('sequelize');
const {Airport,City}=require('./models/index');
 const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');


const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        //DB.sequelize.sync({alter:true})
        if(process.env.SYN_DB=='true'){
            DB.sequelize.sync({alter:true});
            
        }
        // const city=await City.findByPk(21);
        // const aiport=await city.getAirports();

        // console.log(city,aiport);

    });
}

setupAndStartServer();
