const express=require('express');
const {PORT}=require('./config/serverConfig')



const setUpServer=async ()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`The server is running on ${PORT}`);
    })
}
setUpServer();
