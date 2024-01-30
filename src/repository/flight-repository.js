const { where } = require('sequelize');
const {Flight} =require('../models/index');

class FlightRepository{
    /*
        This is how we create a private method in javascript and and in this private method we are creating an object and 
        based on the data we received from the request body we are populatting the data in the object and the below in the 
        get all method that particulat method is been passed to compare it with the where condition
        
    
    
    */

    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        console.log(filter);
        return filter;

    }




    async createFlight(data){
        try {
            const createdFlight=await Flight.create(data);
            return createdFlight;
        } catch (error) {
            console.log("Somthing went wrong in the service layer");
            throw {error};
        }
    }
    async getFlight(id){
        try {
           
            const flight=await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong with the repostory layer");
            throw{error};
        }
    }
    async getAllFlight(data){
        try {
            const filterObject=this.#createFilter(data)
            const flight=await Flight.findAll(
                {
                    where:filterObject
                }
            );
            return flight;
        } catch (error) {
            console.log("Something went wrong with the repostory layer");
            throw{error};
        }
    }
}
 



/*
    flightNumber
    airplaneId
    departureAirportId
    arrivalAirportId
    arrivalTime
    departureTime
    price
*/
module.exports=FlightRepository
