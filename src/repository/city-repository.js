const { City } = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class CityRepository {

    async createCity({ name }) { 
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) { // {name: "Prayagraj"}
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllCity(data){
        try {
            
            if(data.name){
                
                const city=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: data.name
                        }
                    }
                });
                return city;
            }
            

            const city =await City.findAll();
            return city;
        } catch (error) {
            console.log("Something went wrong with the repo layer");
            throw {error};
        }
    }
    async getCityAirport(data){
        try {
            
            const city=await City.findByPk(data);
            const airport=await city.getAirports();
            console.log(airport);
            return airport;


        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};

        }
    }

}

module.exports = CityRepository;