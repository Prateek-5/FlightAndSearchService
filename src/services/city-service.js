const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getAllCity(data){
        try {
            
            const city=await this.cityRepository.getAllCity({name:data.name});
            return city;
        } catch (error) {
            console.log("Something went wrong with the service layer");
            throw {error};
        }
    }
    async getCityAirport(data){
        try {
            const cityAirport=await this.cityRepository.getCityAirport(data);
            return cityAirport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            return {error};
        }
    }

}

module.exports = CityService;