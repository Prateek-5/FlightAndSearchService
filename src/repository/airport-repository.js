
const {Airport} =require('../models/index');
const CrudRepository=require('./crud-repostory');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);

    }
    
}

module.exports=AirportRepository;
