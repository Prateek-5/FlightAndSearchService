const {Flight} =require('../models/index');

class FlightRepository{
    async createFlight(data){
        try {
            console.log(data);
            const createdFlight=await Flight.create(data);
            return createdFlight;
        } catch (error) {
            console.log("Somthing went wrong in the service layer");
            throw {error};
        }
    }
    async getFlight(id){
        try {
           
            const flight=await Flight.findByPk(id.id);
            return flight;
        } catch (error) {
            console.log("Something went wrong with the repostory layer");
            throw{error};
        }
    }
}

module.exports=FlightRepository
