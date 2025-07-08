const express = require("express");
const app = express();
const port = 3001;

// JSON Middleware
app.use(express.json());

let products = [
    { id: 1, productName: "Watch", price: 500, description: "Trendy sportz watch with water resistant" },
    { id: 2, productName: "Iphone", price: 50000, description: "New iphone 16 with 16GB RAM memory" }
];
let nextId = 3;

// GET API
app.get("/products", (req, res) => {
    res.json(products);
})

// POST API
app.post("/products", (req, res) => {
    const { productName, price, description } = req.body;

    if (!productName || !price || !description) {
        return res.json({ message: "All fields are required" });
    }

    const newProducts = {
        id: String(nextId++),
        productName,
        price,
        description
    }
    products.push(newProducts);
    res.json(newProducts)
})

// DELETE API
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const initialLength = products.length;
    products = products.filter(product => product.id !== id);

    if(products.length === initialLength){
        return res.json({message: "Product not found"});
    }
    res.send();
})

app.listen(port, () => {
    console.log("Server running");
})