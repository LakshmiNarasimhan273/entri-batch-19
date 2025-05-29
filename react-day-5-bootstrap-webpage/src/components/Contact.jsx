import React from 'react'

function Contact() {
  return (
    <section id='contact' className='py-5 bg-white'>
        <div className='container'>
            <h2 className='text-center fw-bold mb-4'>Get in touch</h2>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-lg-6'>
                    <form className='p-4 rounded bg-light'>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label fw-semibold'>Name</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label fw-semibold'>Email</label>
                            <input type="email" className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label fw-semibold'>Message</label>
                            <textarea name="" className='form-control' id="" rows="4"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact