const {ClientErrorCodes}=require('../util/error-code')

const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price)
    {
        res.status(ClientErrorCodes.BAD_REQUEST).json({
            message:"The request body does'nt have the required fields",
            data:{},
            success:false,
            error:"Few mandatory fields are missing the the request body"
        })
    }
    else{
        next();
    }
    
}

module.exports={validateCreateFlight};