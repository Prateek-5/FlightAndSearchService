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
}

module.exports=FlightRepository
