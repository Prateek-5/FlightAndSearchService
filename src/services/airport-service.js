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




}
module.exports=AirportService;