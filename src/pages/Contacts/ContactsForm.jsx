import { useState } from "react"
import Spinner from "./Spinner";

export default function ContactsForm(){

    const BASE_URL = `https://codeworks-server-h0cuu9rva-raven-mulis-projects.vercel.app/create-message`;

    const servicesList = [
        'App Development',
        'Web Development',
        'Management System',
        'Bulk SMS',
        'USSD Applications'
    ];

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);

    const [msg, setMsg] = useState('');
    const [isMsgFocused, setIsMsgFocused] = useState(false);

    const [selectedServices, setSelectedServices] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            // Add service if checked
            setSelectedServices([...selectedServices, value]);
        } else {
            // Remove service if unchecked
            setSelectedServices(selectedServices.filter(service => service !== value));
        }
    };

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function httpHandleFormSubmission(e){
        e.preventDefault();

        if(name.trim() === '' || email.trim() === '' || phone.trim() === '' || msg.trim() === '' || 
        selectedServices.length === 0){
            setError('Form is not valid.Kindly fill all the required fields.')

           setTimeout(() => {
            setError('')
           }, 3000)
        }else{
            setIsLoading(true);

            const response = await fetch(BASE_URL, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    "fullName" : name,
                    "email" : email,
                    "phoneNumber" : phone,
                    "services" : selectedServices,
                    "message" : msg
                })
            })

            if(response.ok){
                const data = await response.json();
                console.log(data)
                setIsLoading(false);

                setName('')
                setEmail('')
                setPhone('')
                setMsg('')
                setSelectedServices([])
            }else{
                const data = await response.json();
                setIsLoading(false);
                console.log(data)
            }
        }
    }
    
    return <div className='flex flex-col items-center justify-center min-h-screen'>
        <form className='p-16 w-full max-w-4xl sm:p-6' onSubmit={httpHandleFormSubmission}>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col w-full md:w-1/2 space-y-6 mt-2'>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Full Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={() => setIsNameFocused(true)}
                                onBlur={() => setIsNameFocused(false)}
                                className={`${isNameFocused ? 'outline-none border border-slate-400' : 'border'} border-gray-300 rounded px-3 py-2 text-gray-700`}
                                name='fullName'
                                placeholder='Full name'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}
                                className={`${isEmailFocused ? 'outline-none border border-slate-400' : 'border'} border-gray-300 rounded px-3 py-2 text-gray-700`}
                                name='email'
                                placeholder='Johndoe@gmail.com'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1'>Phone Number</label>
                            {}
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onFocus={() => setIsPhoneFocused(true)}
                                onBlur={() => setIsPhoneFocused(false)}
                                className={`${isPhoneFocused ? 'outline-none border border-slate-400' : 'border'} border-gray-300 rounded px-3 py-2 text-gray-700`}
                                name='email'
                                placeholder='+25476553833'
                            />

                        </div>

                        <div>
                            <p className='text-blue-900 text-[13px] font-inter font-semibold mb-2'>Services</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {servicesList.map((service) => (
                                    <div key={service} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            value={service}
                                            checked={selectedServices.includes(service)}
                                            onChange={handleCheckboxChange}
                                            className='mr-4'
                                        />
                                        <label className='text-slate-600 text-[13px] font-inter'>{service}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-2/3 ml-4 sm:mt-6 sm:ml-0'>
                        <div className='flex flex-col'>
                            <label className='text-blue-900 text-[13px] font-inter font-semibold mb-1 sm:mb-3'>Message</label>
                            <textarea
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                onFocus={() => setIsMsgFocused(true)}
                                onBlur={() => setIsMsgFocused(false)}
                                className={`${isMsgFocused ? 'outline-none border border-slate-400' : 'border'} border-gray-300 rounded px-3 py-2 text-gray-700`}
                                name='message'
                                rows={7}
                                placeholder='Leave us a message...'
                            />
                        </div>
                        <div className='mt-4'>
                            <button
                                className='bg-[midnightblue] text-white rounded px-6 py-2 w-full font-semibold text-[13px] font-inter'>
                                Send Message
                            </button>
                            {error.trim() !== '' && <p className="mt-4 font-inter text-[13px] text-red-600 font-medium">{error}</p>}
                            {isLoading && <div className="flex mt-4 font-inter text-[13px] italic text-slate-600">
                                <p className="mt-[2px]">Submitting...</p>
                                <Spinner/>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div className="bg-gradient-to-b from-white to-slate-200 h-[25vh] w-full sm:h-[20vh]"/>
</div>
}