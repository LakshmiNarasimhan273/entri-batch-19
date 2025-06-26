import React, { useState } from 'react'
import * as Yup from "yup";

const validation = Yup.object().shape({
    name: Yup.string().max(30, 'Name must be 30 characters or less').required('Name is required'),
    email: Yup.string().email("Invalid email address").required("Email is required")
});

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, // rest operator
            [name]: value
        }))
    }

    const validate = async () => {
        try{
            await validation.validate(formData, {abortEarly: false});
            setErrors({});
            return true;
        }catch(err){
            const newErrors = {};
            err.inner.forEach((e) => {
                newErrors[e.path] = e.message;
            });
            setErrors(newErrors);
            return false;
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault(); // onsubmit handler
        const isValid = await validate();
        if(!isValid) return;

        console.log("Form submitted", formData);
        alert("Form submitted");
        setFormData({name: '', email: ''});
    }

    return (
        <div>
            <h2>Contact form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} />
                    {/* Error printing place */}
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="name" name='email' value={formData.email} onChange={handleChange} />
                    {/* Error printing place */}
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm