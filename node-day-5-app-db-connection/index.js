const express = require("express");
const dbConnection = require("./config/dbconnection");
const User = require("./model/User");
const jwt = require("jsonwebtoken"); // login api
const bcrypt = require("bcryptjs"); // register api

const app = express();
const port = 8081;

const jwt_key = "EntriFullstackwebdevelopment";

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
});

// Authentication API's
// 1) Registration API
app.post("/auth/register", async(req, res) => {
    const{username, password, role} = req.body;
    try{

        // Check the user mail is already saved in our db or not
        const emailCheck = await User.findOne({username});
        if(emailCheck){
            return res.status(400).json({message: "User account already registered"});
        }

        // Hashing password
        const hashedPassword = await bcrypt.hash(password, 10);

        // New user registration process
        const user = new User({username, password: hashedPassword, role});
        await user.save();
        res.status(201).json({message: "User registered successfully"});
    }catch(err){
        console.error(err);        
    }
})

// Login API
app.post("/auth/login", async (req, res) => {
    const{username, password} = req.body;

    try{

        // Check the username in db
        const user = await User.findOne({username});

        if(!user){
            return res.status(400).json({message: "User account not found, please register first"});
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if(!passwordMatch){
            return res.status(400).json({message: "Password mismatch"});
        }

        // JWT Token generate
        const token = jwt.sign(
            {userId: user._id, role: user.role},
            jwt_key,
            {expiresIn: "24h"}
        );

        res.status(200).json({message: "Login successful", token});

    }catch(err){
        console.error(err);        
    }

})



dbConnection();

app.listen(port, () => {
    console.log(`Server running on ${port}`);    
});