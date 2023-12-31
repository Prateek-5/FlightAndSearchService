const {CityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.cityservice=new CityRepository();
    }

    async addCity(cityName){
        try {
            
            const city=await this.cityservice.addcity(cityName);
            return city;
        } catch (error) {
            console.log(error);
            throw({error});
        }
    }

    async deleteCity(cityId){
        try {
            const response=await this.cityservice.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log(error);
            throw({error});
        }
    }

    async updateCity(cityId,data){
        try {
            const updateCity=await this.cityservice.updateCity(cityId,data);
            return updateCity;
        } catch (error) {
            console.log(error);
            throw({error});
        }
    }

    async getCity(cityId){
        try {
            const responseCity=await this.cityservice.updateCity(cityId);
            return responseCity;

        } catch (error) {
            console.log(error);
            throw({error});
        }
    }

}

module.exports=CityService;
