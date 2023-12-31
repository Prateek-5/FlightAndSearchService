const {City} = require('../models/index');


class CityRepository{
    async createCity({name}) {
        try {
            
            const city=await City.create({name})
            return city;

        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw({error});
        }
    }
    
    async deleteCity({id}){
        try {
            
            const record=await City.destroy({
                where:{
                    id:id,
                }
            })
            return true;


        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw({error});
        }
    }
    async updateCity({cityId,data}){
        try {

            const cityUpdate=await City.update(
                data,{
                    where:{
                        id:cityId,
                    }
                }
            )
            return cityUpdate;
            
        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw({error});
        }


        
    }
    async getCity({cityId}){
        try {
            const cityName=await City.findByPk(cityId);
            return cityName;

        } catch (error) {
            console.log("Something went wrong in the repo layer");
            throw({error});
        }
    }


}

module.exports={
    CityRepository
};