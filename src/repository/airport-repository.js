
const {Airport} =require('../models/index');
const Sequelize = require('sequelize');

class AirportRepository{

    constructor() {
        // Ensure that the Airport model is initialized before using it
        if (!Airport || !Airport.create) {
            throw new Error('Airport model is not properly initialized');
        }
    }


    async createAirport({ name, address, cityId }){
        try {
            console.log(name,address,cityId)
            const airport=await Airport.create({
                name:name ,
                address:address,
                cityId:cityId,
    
            })
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw{error};
        }



        

    }
}

module.exports=AirportRepository;
