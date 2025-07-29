const mongoose = require("mongoose");

async function dbConnection(){
    try{
        // await mongoose.connect("mongodb://localhost:27017/first-connection");
        await mongoose.connect("mongodb+srv://narasimhan:narasimhan123@batch19-db.ynygtud.mongodb.net/?retryWrites=true&w=majority&appName=batch19-db", 
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