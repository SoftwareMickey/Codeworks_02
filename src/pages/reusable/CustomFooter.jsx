import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedIn from '../assets/linkedin.png';
import loc from '../assets/location.png';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';
import call1 from '../assets/call1.png';
import { FaXTwitter } from 'react-icons/fa6';

export default function CustomFooter() {

    let date_today = new Date;
    let year = date_today.getFullYear();

    return (
        <footer className='bg-black py-6 text-white'>
            <div className=' mx-10 flex justify-evenly sm:flex-col'>
                
                <div className='flex-1 min-w-[200px] min-h-[30vh]'>
                    <img src={logo} alt='Logo' className='h-14 mb-4 right-8' />

                    <div className='flex items-center mb-2 ml-4'>
                        <div >
                        <a href='https://wa.me/+254727937157' aria-label='WhatsApp'>
                        <FaWhatsapp size={20} color='#FFFFFF' className='mr-2'/>
                        
                        </a>
                        
                        </div>
                        <p className='text-sm font-semibold'>Chat with us</p>
                    </div>
                    <div className='flex items-center mb-3 ml-4'>
                        
                        <a href='https://www.linkedin.com/in/codeworks-solutions-a076a129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' aria-label='Twitter'>
                        <FaTwitter size={20} color='#FFFFFF'className='mr-2'/>
                        
                        </a>
                        <p className='text-sm font-semibold'>Message us on X</p>
                    </div>
                    <div className='flex items-center mb-3 ml-4'>
                    <a href='mailto:jemutaipicoty@gmail.com' aria-label='Email'>
                        <FaEnvelope size={20} color='#FFFFFF' className='mr-2'/>
                        
                        </a>
                        <p className='text-sm font-semibold'>Email us</p>
                     </div>
                </div>
                
                

                <div className='mt-4 flex justify-between'>
                    <div className='flex-1 min-w-[200px] mb-2 min-h-[30vh]'>
                        <p className='font-bold mb-2'>Social Info</p>
                        <p className='text-[12px] mb-2 font-inter'>Our social media links</p>
                        <div className='flex gap-4 mb-4'>
                            <Link to='https://www.instagram.com/codeworks_solutions?igsh=MTVlaDhsMGQ3YThvcw=='>
                                <FaXTwitter/>
                            </Link>
                            <Link to='https://www.instagram.com/codeworks_solutions?igsh=MTVlaDhsMGQ3YThvcw=='><img src={instagram} alt='Instagram' className='h-4' /></Link>
                            <Link to='https://www.facebook.com/profile.php?id=61565705875770&mibextid=ZbWKwL'><img src={facebook} alt='Facebook' className='h-4' /></Link>
                            <Link to='https://www.linkedin.com/in/codeworks-solutions-a076a129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedIn} alt='LinkedIn' className='h-4' /></Link>
                        </div>
                        <p className='font-bold mb-2'>Contact Us</p>
                        <div className='flex items-center mb-4'>
                            <img src={call1} alt='Phone' className='h-3 mr-2' />
                            <a href="tel:+254727937157" className='text-sm font-semibold'>+254727937157</a>
                        </div>
                    </div>

                    <div className='flex-1 min-w-[200px] mb-2'>
                        <p className='font-bold mb-2'>Quick Links</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-1'>
                                <a href='/' className='font-inter text-[13px]'>Home</a>
                            </li>
                            <li className='mb-1'>
                                <a href='/about' className='font-inter text-[13px]'>About Us</a>
                            </li>
                            <li className='mb-1'>
                                <a href='/services' className='font-inter text-[13px]'>Our Services</a>
                            </li>
                            <li className='mb-1'>
                                <a href='/contacts' className='font-inter text-[13px]'>Contact us</a>
                            </li>
                        </ul>
                    </div>

                    <div className='flex-1 min-w-[300px] mb-4'>
                        <p className='font-bold mb-2'>Our Services</p>
                        <ul className='list-disc list-inside'>
                            <li className='text-[13px] mb-2 font-inter'>App Development</li>
                            <li className='text-[13px] mb-2 font-inter'>Web Development</li>
                            <li className='text-[13px] mb-2 font-inter text-wrap'>Management System Development</li>
                            <li className='text-[13px] mb-2 font-inter'>USSD Codes</li>
                            <li className='text-[13px] mb-2 font-inter'>Bluck Sms</li>


                        </ul>
                    </div>
                    
                    <div className='flex-1 min-w-[200px] mb-2'>
                        <p className='font-bold mb-2'>Visit Us</p>
                        <p className='text-[13px] font-inter mb-2'>Chat with us in person in Westlands</p>
                        <div className='flex items-center'>
                            <a href="https://g.co/kgs/zYjsCd9">
                            <img src={loc} alt='Location' className='h-3 mr-2' />
                            <p className='text-sm font-semibold'> LE MAC, CHURCH ROAD, WESTLANDS</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <hr />

            <div className='bg-black text-white py-4 text-center text-sm mt-6'>
                <p>&copy; {year} CODEWORKS, Designed and Developed by CODEWORKS</p>
            </div>
        </footer>
    );
}
