const {AirportService}=require('../services/index');

const airportservice= new AirportService();

 const create=async(req,res)=>{
    try {
        const airport=await airportservice.create(req.body);
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
        
        const response=await airportservice.destroy(req.params);
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
const getAllAirport=async(req,res)=>{
    
    try {
        const data=await airportservice.getAll();
        res.status(200).json({
            Message:"Below is the list of all airports",
            success:true,
            data:{data},
            error:{}

    })
    } catch (error) {
        console.log("Something went wrong in the controller")
        res.status(500).json({
            Message:" Unable to fetch all Airports",
            success:false,
            data:{},
            error:error
        })   
    }
}
const getAirport=async(req,res)=>{
    
    try {
        const oneAirport=await airportservice.get(req.params.id);
        res.status(200).json({
            Message:"Airport Found Successfully",
            success:true,
            data:oneAirport,
            error:{}
        })
    } catch (error) {
        console.log("Something went wrong in the controller")
        res.status(500).json({
            Message:" Unable to fetch the Airports",
            success:false,
            data:{},
            error:error
        })  
    }
}

const updateAirport=async (req,res)=>{
    
    try {
        
        const updatedAirport=await airportservice.update({
            id:req.params.id,
            data:req.body
        
        });
        
        res.status(200).json({
            Message:"Airport Updated successfully",
            success:true,
            data:updatedAirport,
            error:{}
        })
    } catch (error) {
        console.log("Something went wrong in the controller")
        res.status(500).json({
            Message:" Unable update the Airports",
            success:false,
            data:{},
            error:error
        }) 
    }
}

module.exports={
    create,
    deleteAirport,
    getAllAirport,
    getAirport,
    updateAirport
}