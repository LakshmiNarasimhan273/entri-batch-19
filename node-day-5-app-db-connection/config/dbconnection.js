const mongoose = require("mongoose");

async function dbConnection(){
    try{
        // await mongoose.connect("mongodb://localhost:27017/first-connection");
        await mongoose.connect("mongodb+srv://lakshminarasimhan511:Entri123@products-crud.zkb97th.mongodb.net/?retryWrites=true&w=majority&appName=products-crud", 
            // Optional keys, incase of connection error use these objects
            {
                ssl: true, // Secure Sockets Layer - data encryption during app connection to database
                tlsAllowInvalidCertificates: false // Supporting part of ssl
            }
        )
        console.log("Database connected");        
    }catch(err){
        console.error(err);        
    }
}

module.exports = dbConnection;