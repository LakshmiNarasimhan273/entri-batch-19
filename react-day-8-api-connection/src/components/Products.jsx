import React, { useEffect, useState } from 'react';
import axios from "axios";

function Products() {
    const[products, setProducts] = useState([]);

    useEffect(() => { // mounting
        axios.get("https://fakestoreapi.com/products?limit=5") // limit parameter
        .then(res => setProducts(res.data)) // updating
        .catch(err => console.error(err)
        )
    }, []); //unmounting

  return (
    <div>
        {
            products.map(allproduct => (
                <div key={allproduct.id} style={{marginTop: "20px", color: "green"}}>
                    <p>{allproduct.id}</p>
                    <h3>{allproduct.title}</h3>
                <h3>{allproduct.price}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Products