const express = require("express");

const app = express();
const port = 3001;

// Basic get route
app.get("/welcome", (req, res) => {
    res.send("Welcome user");
});

// Post route
app.post("/add-user", (req, res) =>{
    res.send("User added");
});

// Put route
app.put("/edit-user", (req, res) => {
    res.send("Edit user");
});

// Delete route
app.delete("/delete-user", (req, res) => {
    res.send("User deleted");
})

app.listen(port, () => {
    console.log(`Server running on port - http://localhost:${port}`);
})