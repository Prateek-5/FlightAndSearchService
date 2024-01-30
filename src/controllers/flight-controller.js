const {FlightService}=require('../services/index');

const flightservice=new FlightService();


    const createFlight=async (req,res)=>{
        try {
            const createdFlight=await flightservice.createFlight(req.body);
            res.status(200).json({
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
            res.status(200).json({
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
            const flight=await flightservice.getAllFlight(req.body);
            res.status(200).json({
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


module.exports={
    createFlight,
    getFlight,
    getAllFlight
}