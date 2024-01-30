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
            /*
                Here we are not expecting the total seats from the user while creating the flight we will featch the 
                totalSeat beased on the airplane model that's why we have internally called the airplane repository 
                and based in the respondce we have appened the additional data (total seat) to the data object to the 
                create flight using the spread operator

            */
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
            const flight=await this.flightrepository.getFlight(data.id);
            return flight;
        } catch (error) {
            console.log(error);
            throw{error};
        }
    }
    async getAllFlight(data){
        try {
            const flight=await this.flightrepository.getAllFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw{error};

        }
    }




}

module.exports=FlightService;