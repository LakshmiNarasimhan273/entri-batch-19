import React from 'react';

const products = [
    {
        id: 1,
        title: "Smart watch",
        price: 999,
        image: "https://i.pinimg.com/736x/55/77/ff/5577ffc3fc28195e7819b3ad6669460e.jpg"
    },
    {
        id: 2,
        title: 'Earbuds',
        price: 10000,
        image: "https://i.pinimg.com/736x/0c/b9/3a/0cb93a48dcdfb1c8caab2db3ab37f4d3.jpg"
    },
    {
        id: 3,
        title: 'Bat',
        price: 5000,
        image: "https://i.pinimg.com/736x/48/3c/26/483c26c31e5fa8b0f0cf2474b04f2160.jpg"
    }
];

function Allproducts() {
  return (
    <section id='products' className='py-5 bg-light'>
        <div className='container'>
            <h2 className='text-center fw-bold'>All Products</h2>
            <div className='row g-4'>
                {
                    products.map((product, index) => (
                        <div className='col-sm-6 col-md-4 col-lg-3' key={index}>
                                <div className='card h-100'>
                                    <img src={product.image} alt={product.title} style={{height: '200px', objectFit: 'cover'}} />
                                    <div className='card-body d-flex flex-column text-center'>
                                           <h5 className='card-title'>{product.title}</h5>     
                                           <h5 className='fw-semibold text-success'>${product.price}</h5>
                                           <button className='btn btn-primary'>Add to cart</button>
                                    </div>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Allproducts