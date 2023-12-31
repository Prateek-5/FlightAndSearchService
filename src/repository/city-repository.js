const {City} = require('../models/index');


class CityRepository{
    async createCity({name}) {
        try {
            
            const city=await City.create({name})
            return city;

        } catch (error) {
            console.log(error);
        }
    }
    
    async deleteCity({id}){
        try {
            
            const record=await City.destroy({
                where:{
                    id:id,
                }
            })
            return record;


        } catch (error) {
            console.log(error);
        }
    }
}

module.exports={
    CityRepository
};