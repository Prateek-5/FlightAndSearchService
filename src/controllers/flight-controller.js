const {FlightService}=require('../services/index');
const {SuccessCodes}=require('../util/error-code');


const flightservice=new FlightService();


/*
    flightNumber
    airplaneId
    departureAirportId
    arrivalAirportId
    arrivalTime
    departureTime
    price
*/
    const createFlight=async (req,res)=>{
        try {

            const flighDetails={
                flightNumber:req.body.flightNumber,
                airplaneId:req.body.airplaneId,
                departureAirportId:req.body.departureAirportId,
                arrivalAirportId:req.body.arrivalAirportId,
                arrivalTime:req.body.arrivalTime,
                departureTime:req.body.departureTime,
                price:req.body.price
            }
            const createdFlight=await flightservice.createFlight(flighDetails);
            res.status(SuccessCodes.CREATED).json({
                Message:"Flight created successfully",
                success:true,
                data:{createdFlight},
                error:{}
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                Message:"Unable to create flight",
                data:{},
                success:false,
                error:{error}
            })
        }
    }
    const getFlight=async(req,res)=>{
        
        try {
            const flight=await flightservice.getFlight(req.params);
            res.status(SuccessCodes.OK).json({
                Message:"Below is the flight information required",
                success:true,
                data:{flight},
                error:{}
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                Message:"Unable to fetch flight",
                data:{},
                success:false,
                error:{error}
            })
        }
    }
    const getAllFlight=async(req,res)=>{
        try {
            
            const flight=await flightservice.getAllFlight(req.query);
            res.status(SuccessCodes.OK).json({
                Message:"Below is the flight information required",
                success:true,
                data:{flight},
                error:{}
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                Message:"Unable to fetch flight",
                data:{},
                success:false,
                error:{error}
            })
        }
    }
    const update =async(req,res)=>{
        try {
            //console.log("This is the params",req.params,"This is the req body",req.body);
            const responce= await flightservice.updateFlight(req.params,req.body);
            return res.status(SuccessCodes.OK).json({
                Message:"Successfully updated the flight",
                success:true,
                data:{responce},
                error:{}
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                Message:"Unable to update flight",
                data:{},
                success:false,
                error:{error}
            })
        }
    }


module.exports={
    createFlight,
    getFlight,
    getAllFlight,
    update
}