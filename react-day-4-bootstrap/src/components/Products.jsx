import React from 'react'

function Products() {
    const allproducts = [
        {id: 1, name: "Smart watch", image: "https://i.pinimg.com/736x/02/45/81/024581217cb114f9236d34168379e013.jpg", price: 999},
        {id: 2, name: "Laptop", price: 22500},
        {id: 3, name: "TV", price: 15000},
        {id: 4, name: "Mobile", price: 28000},
    ]
  return (
    <div className='py-5 bg-light'>
        <div className='container'>
            <h2 className='text-center fw-bold'>Our products</h2>

            <div className='row g-4'>
                {
                    allproducts.map((product, index) => (
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <div className='card shadow-sm h-100'>
                                <img src={product.image} alt="" />
                                    <h4 className='text-center'>{product.name}</h4>
                                    <h5 className='text-center '>{product.price}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products