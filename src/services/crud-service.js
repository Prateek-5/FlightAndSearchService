class CrudService{

    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        
        try {
            const response=await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD service layer");
            throw{error};
        }
    }

    async destroy(id){
        try {
            const response=await this.repository.destroy(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in the CRUD service layer");
            throw{error};
        }
    }

    async get(id){
        try {
            const response=await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong with the CRUD service layer");
            throw{error};
        }
    }
    
    async getAll(){
        try {
            const response=await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong with the service layer");
            throw{error};
        }
    }

    async update(){
        try {
            const response=await this.repository.update(data);
            return response;

        } catch (error) {
            console.log("Something went wrong in the CRUD service layer");
            throw{error};
        }
    }


}

module.exports=CrudService;
