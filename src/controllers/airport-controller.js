const {AirportService}=require('../services/index');

const airportservice= new AirportService();

 const create=async(req,res)=>{
    try {
        const airport=await airportservice.createAirport(req.body);
        res.status(201).json({
            Message:"Airport Created Successfully",
            success:true,
            data:airport,
            error:{}
        })

    } catch (error) {
        console.log("Something went wrong in the controller")
        res.status(500).json({
            Message:"Airport Unable to create Airport",
            success:false,
            data:{},
            error:error
        })
    }
}

const deleteAirport=async(req,res)=>{
    try {
        
        const response=await airportservice.deleteAirport(req.params);
        res.status(200).json({
            Message:"Airport Deleated Successfully",
            success:true,
            data:{},
            error:{},
        })


    } catch (error) {
        console.log("Something went wrong in the controller")
        res.status(500).json({
            Message:"Airport Unable to delete Airport",
            success:false,
            data:{},
            error:error
        })
    }
}

module.exports={
    create,
    deleteAirport
}