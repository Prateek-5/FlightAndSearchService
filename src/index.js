const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig')
const DB=require('./models/index')
const {CityRepository}=require('./repository/city-repository')




const setUpServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));



    app.listen(PORT,()=>{
        console.log(`The server is running on ${PORT}`);
        const cityInst=new CityRepository();
        cityInst.createCity({name:"New Delhi"})
        cityInst.deleteCity({id:1})
        
    })
}
setUpServer();
