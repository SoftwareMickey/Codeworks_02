import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';

export default function ContactsForm(){

    // Initial form data to reset fields after submission
    const initialFormData = {
        fullName: '',
        email: '',
        phoneNumber: '',
        services: [],
        message: ''
    };
    
    const [formData, setFormData] = useState(initialFormData);

    const handleCheckboxChange = (e) => {
        const { checked, value } = e.target;
        setFormData((prevData) => {
            const updatedServices = checked
                ? [...prevData.services, value]
                : prevData.services.filter((service) => service !== value);
            return { ...prevData, services: updatedServices };
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Submit form data
            await axios.post('http://localhost:5000/api/contacts', formData);
            alert('Message sent successfully!');
            // Clear the form fields after submission
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send the message.');
        }
    };

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, phoneNumber: value });
    };


    return <div className='flex items-center justify-center min-h-screen p-8'>
        <div className='p-8 w-full max-w-4xl'>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col w-full md:w-1/2 space-y-6 mt-2'>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Full Name</label>
                            <input
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder='Full name'
                                className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Email</label>
                            <input
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Johndoe@gmail.com'
                                className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Phone Number</label>
                            {}
                            <PhoneInput
                                country={'ke'}
                                value={formData.phoneNumber}
                                onChange={handlePhoneChange}
                                placeholder='Phone number'  
                                inputClass='border border-gray-300 rounded px-3 py-2 text-gray-700' 
                                containerClass="phone-input-container"
                                buttonClass="phone-input-dropdown"  
                                enableSearch={true}
                            />

                        </div>

                        <div>
                            <p className='text-blue-900 text-[13px] font-inter font-semibold mb-2'>Services</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {['App Development', 'Web Development', 'Management System', 'Bulky SMS', 'USSD Codes'].map((service) => (
                                    <div key={service} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            value={service}
                                            checked={formData.services.includes(service)}
                                            onChange={handleCheckboxChange}
                                            className='mr-4'
                                        />
                                        <label className='text-slate-600 text-sm'>{service}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-2/3 ml-4'>
                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Message</label>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                rows={7}
                                placeholder='Leave us a message...'
                                className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                            />
                        </div>
                        <div className='mt-4'>
                            <button
                                type='submit'
                                className='bg-[midnightblue] text-white rounded px-6 py-2 w-full font-semibold text-[13px] font-inter'>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
</div>
}