const { where } = require("sequelize");

class CrudRepository{

    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            
            const result=await this.model.create(data)
            return result;

        } catch (error) {
            console.log("These is an error in the repostory layer");
            throw{error};
        }
    }

    async get(id){
        try {
            console.log(id);
            const result=await this.model.findByPk(id);
           

            return result;

        } catch (error) {
            console.log("These is an error in the repostory layer");
            throw{error};
        }
    }
    async getAll(){
        try {
            const result=await this.model.findAll();
            return result;
        } catch (error) {
            console.log("There is an error in the repostory layer");
            throw{error};
        }

    }

    async delete(id){
        try {
            const result=await this.model.destroy(
                {
                    where:id
                }
            )
            return true;

        } catch (error) {
            console.log("These is an error in the repostory layer");
            throw{error};
        }
    }

    async update(id,data){
        try {
            const result=await this.model.update(data,{
                where:id
            });

            return result;

        } catch (error) {
            console.log("These is an error in the repostory layer");
            throw{error};
        }
    }






}
module.exports=CrudRepository;
