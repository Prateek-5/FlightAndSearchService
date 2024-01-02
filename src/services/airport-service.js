const {AirportRepository}=require('../repository/index')

class AirportService{
    constructor(){
        this.airportrepository=new AirportRepository();
    }

    async createAirport(data){
        try {
            const airport=this.airportrepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong with the service layer");
            throw{error};
        }
    }
    async deleteAirport(data){
        try {
            const deletedAirport=this.airportrepository.deleteAirport(data);
            return deletedAirport;
        } catch (error) {
            console.log("Something went wrong with the service layer");
            throw{error};
        }
    }
    async getAllAirport(){
        try {
            const allAirport=await this.airportrepository.getAllAirport();
            return allAirport;
        } catch (error) {
            console.log("Something went wrong with the service layer");
            throw{error};
        }
    }
    async getAirport(id){
        try {
            const oneAirport=await this.airportrepository.getAirport(id);
            return oneAirport;
        } catch (error) {
            console.log("Something went wrong with the service layer");
            throw{error};
        }
    }




}
module.exports=AirportService;