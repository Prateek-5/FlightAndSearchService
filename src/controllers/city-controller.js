const { trace } = require('../routes');
const CityService = require('../services/city-service');

// Create an instance of CityService
const cityservices = new CityService();

const createCity = async (req, res) => {
    try {
       
        const city = await cityservices.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create city",
            error: {}
        });
    }
};

const deleteCity = async (req, res) => {
    try {
        const response = await cityservices.deleteCity(req.params.id);
        res.status(200).json({
            message: "City deleted successfully",
            data: {},
            success: true,
            error: {},
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Unable to delete city",
            success: false,
            data: {},
            error: { error }
        });
    }
};

const updateCity = async (req, res) => {
    try {
        const updateCity = await cityservices.updateCity(req.params.id, req.body.data);
        res.status(201).json({
            message: "Record updated successfully",
            success: true,
            data:  updateCity ,
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Some error occurred during update",
            data: {},
            success: false,
            error: { error }
        });
    }
};

const getCity = async (req, res) => {
    try {
        const responseCity = await cityservices.getCity(req.params.id);
        res.status(200).json({
            message: "City found successfully",
            data: responseCity,
            success: true,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            message: "City not found",
            success: false,
            error: { error },
            data: {}
        });
    }
    
    }
    const getAllCity=async(req,res)=>{
        try {
            const getAllCity=await cityservices.getAllCity();
            res.status(200).json({
                message:"Following cities found",
                data:{getAllCity},
                success:true,
                error:{}
            })


        } catch (error) {
            res.status(200).json({
                message:"No cities found",
                data:{},
                error:{error},
                success:false
            })
        }
    }

module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getCity,
    getAllCity,
};
