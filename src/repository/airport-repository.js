
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
    async deleteAirport(airportId){
        try {
            console.log(airportId.id);
            const response=await Airport.destroy({
                where:{
                    id: airportId.id
                }
            })
            if (response === 0) {
                // If no rows were deleted, it means the airport with the provided ID was not found
                console.log(`Airport with ID ${airportId} not found`);
            }
            return response;
            
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw{error};
        }
    }
    async getAllAirport(){
        try {
            const allAirport=await Airport.findAll();
            return allAirport;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw{error};
        }
    }
    async getAirport({id}){
        try {
            
            const oneAirport=await Airport.findAll({
                where:{
                    id:id
                }
            })
            return oneAirport;
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw{error};
        }
    }
    async updateAirport({id,data}){
        try {
            console.log( data);
            const airport=await Airport.findByPk(id);
            airport.name=data.name;
            airport.address=data.address;
            airport.cityId=data.cityId;
            await airport.save();
            return airport;

        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw{error};
        }
    }
}

module.exports=AirportRepository;
