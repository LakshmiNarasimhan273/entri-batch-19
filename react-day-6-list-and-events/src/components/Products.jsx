import React from 'react'
import "./products.css";

// List & keys
function Products({message, changeMessage}) {
    const allProducts = [
        {id: 1, image: "https://i.pinimg.com/736x/55/77/ff/5577ffc3fc28195e7819b3ad6669460e.jpg", name: "Watch", price: 5000},
        {id: 2, image: "https://i.pinimg.com/736x/47/fa/75/47fa756dce183252f08acf6f488fef33.jpg", name: "Laptop", price: 12000},
        {id: 3, image: "https://i.pinimg.com/736x/c9/f7/c1/c9f7c194b75c11c04054069a01861f05.jpg", name: "Monitor", price: 7000}
    ]
    const handleClick = (productName) => {
        alert(`You clicked on ${productName}`);
    }

    const addtoCart = (productName) => {
        alert(`${productName} added to cart`)
    }
  return (
    <div>

    <h2>Product list</h2>
    <div className='product-container'>
    {
        allProducts.map((data) => (
            <div className='product-card' key={data.id}>
                <img className='product-img' src={data.image} alt="" />
                <h4 className='product-title'>{data.name}</h4> <span className='price'>${data.price}</span>
                <button onClick={()=> addtoCart(data.name)}>Add to cart</button>
            </div>
        ))
    }
    </div>
    <h1>{message}</h1>
    <button onClick={changeMessage}>Send message</button>
    </div>
  )
}

export default Products