import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedIn from '../assets/linkedin.png';
import loc from '../assets/location.png';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function CustomFooter() {

    let date_today = new Date;
    let year = date_today.getFullYear();

    return (
        <footer className='bg-slate-200 py-6 text-green-800'>
            <div className='mx-10 md:flex md:justify-evenly'>
                
                <div className='flex-1 min-w-[200px] md:min-h-[30vh] mb-4'>
                    <img src={logo} alt='Logo' className='h-14 mb-4 sm:hidden'/>

                    <div className='flex items-center mb-4 ml-4 sm:ml-0'>
                        <div >
                        <a href='https://wa.me/+254727937157' aria-label='WhatsApp'>
                        <FaWhatsapp size={20} className='mr-2 text-green-800'/>
                        
                        </a>
                        
                        </div>
                        <p className='text-sm font-semibold'>Chat with us</p>
                    </div>
                    <div className='flex items-center mb-4 ml-4 sm:ml-0'>
                        
                        <a href='https://www.linkedin.com/in/codeworks-solutions-a076a129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' aria-label='Twitter'>
                        <FaTwitter size={20} className='mr-2 text-green-800'/>
                        
                        </a>
                        <p className='text-sm font-semibold'>Message us on X</p>
                    </div>
                    <div className='flex items-center mb-3 ml-4 sm:ml-0'>
                    <a href='mailto:jemutaipicoty@gmail.com' aria-label='Email'>
                        <FaEnvelope size={20} className='mr-2 text-green-800'/>
                        
                        </a>
                        <p className='text-sm font-semibold'>Email us</p>
                     </div>
                </div>
                
                

                <div className='mt-4 flex justify-between sm:flex-col'>
                    <div className='flex-1 min-w-[200px] mb-2 sm:mb-4 md:min-h-[30vh]'>
                        <p className='font-bold mb-2'>Social Info</p>
                        <p className='text-[12px] mb-2 font-inter font-medium'>Our social media links</p>
                        <div className='flex gap-4 mb-8'>
                            <Link to='https://www.instagram.com/codeworks_solutions?igsh=MTVlaDhsMGQ3YThvcw=='>
                                <FaXTwitter/>
                            </Link>
                            <Link to='https://www.instagram.com/codeworks_solutions?igsh=MTVlaDhsMGQ3YThvcw=='><img src={instagram} alt='Instagram' className='h-4' /></Link>
                            <Link to='https://www.facebook.com/profile.php?id=61565705875770&mibextid=ZbWKwL'><img src={facebook} alt='Facebook' className='h-4' /></Link>
                            <Link to='https://www.linkedin.com/in/codeworks-solutions-a076a129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedIn} alt='LinkedIn' className='h-4' /></Link>
                        </div>
                        <p className='font-bold mb-2'>Contact Us</p>
                        <div className='flex items-center mb-4'>
                            <FaPhoneAlt className='text-green-800'/>
                            <a href="tel:+254727937157" className='text-sm font-semibold'>+254727937157</a>
                        </div>
                    </div>

                    <div className='flex-1 min-w-[200px] mb-2 sm:mb-4'>
                        <p className='font-bold mb-2'>Quick Links</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-3'>
                                <a href='/' className=' text-[13px] font-medium'>Home</a>
                            </li>
                            <li className='mb-3'>
                                <a href='/about' className=' text-[13px] font-medium'>About Us</a>
                            </li>
                            <li className='mb-3'>
                                <a href='/services' className=' text-[13px] font-medium'>Our Services</a>
                            </li>
                            <li className='mb-3'>
                                <a href='/contacts' className=' text-[13px] font-medium'>Contact us</a>
                            </li>
                        </ul>
                    </div>

                    <div className='flex-1 min-w-[300px] mb-4'>
                        <p className='font-bold mb-2'>Our Services</p>
                        <ul className='list-disc list-inside'>
                            <li className='text-[13px] mb-4 font-medium'>App Development</li>
                            <li className='text-[13px] mb-4 font-medium'>Web Development</li>
                            <li className='text-[13px] mb-4 font-medium text-wrap'>Management System Development</li>
                            <li className='text-[13px] mb-4 font-medium'>USSD Codes</li>
                            <li className='text-[13px] mb-4 font-medium'>Bluck Sms</li>


                        </ul>
                    </div>
                    
                    <div className='flex-1 min-w-[200px] mb-2'>
                        <p className='font-bold mb-2'>Visit Us</p>
                        <p className='text-[13px] font-medium'>Chat with us in person in Westlands</p>
                        <div className='flex items-center mt-4'>
                            <a href="https://g.co/kgs/zYjsCd9">
                            <img src={loc} alt='Location' className='h-3 mr-2 mb-2' />
                            <p className='text-sm font-medium'> LE MAC, CHURCH ROAD, WESTLANDS</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <hr />

            <div className='bg-slate-200 text-green-800 py-4 text-center text-sm mt-6 font-medium sm:hidden'>
                <p>&copy; {year} CODEWORKS, Designed and Developed by CODEWORKS</p>
            </div>
        </footer>
    );
}
