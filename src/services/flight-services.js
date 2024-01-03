const {AirplaneRepository}=require('../repository/index');
const {FlightRepository}=require('../repository/index');
const {compareDates}=require('../util/compareDates')

class FlightService{
    constructor(){
        this.airplanerepository=new AirplaneRepository();
        this.flightrepository=new FlightRepository();
    }

    async createFlight(data){    
        try {
            if(!compareDates(data.arrivalTime,data.departureTime)){
                throw {error:"Arrival date cannot be before departure date"};
            }

            const response=await this.airplanerepository.getAirplane(data.airplaneId);
            const createdFlight=await this.flightrepository.createFlight({...data,totalSeats:response.capacity});
            return createdFlight;
        } catch (error) {
            console.log(error);
            throw{error};
        }
    }
    async getFlight(data){
        try {
            const flight=await this.flightrepository.getFlight(data);
            return flight;
        } catch (error) {
            console.log(error);
            throw{error};
        }
    }




}

module.exports=FlightService;