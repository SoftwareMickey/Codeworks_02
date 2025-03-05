import PhoneInput from 'react-phone-input-2';

export default function ContactsForm(){

    return <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='p-16 w-full max-w-4xl'>
            <form className='w-full'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col w-full md:w-1/2 space-y-6 mt-2'>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Full Name</label>
                            <input
                                name='fullName'
                                placeholder='Full name'
                                className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Email</label>
                            <input
                                name='email'
                                placeholder='Johndoe@gmail.com'
                                className='border border-gray-300 rounded px-3 py-2 text-gray-700'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Phone Number</label>
                            {}
                            <PhoneInput
                                country={'ke'}
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
                                {['App Development', 'Web Development', 'Management System', 'Bulk SMS', 'USSD Applications'].map((service) => (
                                    <div key={service} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            value={service}
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
        <div className="bg-gradient-to-b from-white to-slate-200 h-[25vh] w-full"/>
</div>
}