const express = require("express");
const dbConnection = require("./config/dbconnection");
const User = require("./model/User");

const app = express();
const port = 8081;

app.use(express.json());

// POST API
app.post("/users/add", async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json({message: "User added successfully"});
        // 201 - Created
    }catch(err){
        console.error(err);        
    }
});

// GET API
app.get("/users", async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
        // 200 - OK 
    }catch(err){
        console.error(err);        
    }
})

// PUT API
app.put("/users/edit/:id", async(req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({message: "Updated successfully"});
    }catch(err){
        console.error(err);        
    }
})

// DELETE API
app.delete("/users/:id", async(req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User deleted"})
    }catch(err){
        console.error(err);        
    }
})

dbConnection();

app.listen(port, () => {
    console.log(`Server running on ${port}`);    
});