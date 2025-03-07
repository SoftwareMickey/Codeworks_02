// import AnimationVideo from './AnimatedVideo';
import face from './assets/facebook.png';
import insta from './assets/instagram.png';
import linked from './assets/linkedin.png';
import twitter from './assets/twitter.png';

import send from '../assets/gmail.png';
import whats from './assets/whatsapp.png';

import { FaBars } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import './../../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/modal-state';
import MobileNavigation from '../../navigation/Nav';
import CustomFooter from '../reusable/CustomFooter';
import VideoPlayer from './animes/AnimeVideo';
import NewsLetter from '../reusable/NewsLetter';
import Industries from './industries/Industries';
import CallToAction from './call-to-action/CallToAction';
import FrequentQns from './Faqs/FrequentQns';
import Technologies from './Technologies/Technologies';
import LocationContact from './Location-Contact/Location-Contact';
import WorkingProcess from './working-process/Working-Process';
import WhyChooseUs from './why-us/Why-Choose-Us';

export default function LandingPage(){
    const dispatch = useDispatch();
    const isModalShown = useSelector(state => state.modalState.isModalOpen);

    function showModalHandler(){
        dispatch(modalActions.openModalHandler());
    }

    const navigator = useNavigate();

    // * Got to a specific page
    function goToContactPage(){
        navigator("/contacts#contacts-section")
    }

    return <section id='landing' className='sm:flex sm:flex-col'>
        <MobileNavigation/>

        <div className='sm:visible md:hidden my-4 flex mx-4 justify-between'>
            <FaBars className='mt-1' onClick={showModalHandler}/>
            <NavLink to='contacts' className='font-barlow'>Contacts</NavLink>
        </div>

        <div className='flex md:ml-14 md:mr-10 sm:m-0'>
            <div className='w-[60%] sm:w-full'>
                    <div className="mt-6 mx-4">
                        <p className='font-inter border text-[13px] bg-slate-100 w-max px-4 py-2 rounded-full'>Your Success, Our Priority</p>

                        <p className="text-[46px] font-bold font-inter mt-12 sm:text-center">Transforming <span className='text-blue-900'>Ideas</span> into Digital Solutions</p>
                        {/* <p className="text-[56px] font-bold font-barlow sm:text-center">Our Code</p> */}
                        <p className="mt-4 font-inter sm:text-center sm:mt-10 text-[14px] leading-7 text-slate-600">At CodeWorks, we specialize in building high-performance software solutions that drive growth, efficiency, and innovation. Whether you need a powerful web application, a custom mobile app, or enterprise software, we deliver tailored solutions with precision, speed, and scalability. </p>
                    </div>

                    <div className="mt-8 mx-4 sm:flex sm:items-center sm:justify-center">
                        <button className="bg-[midnightblue] px-4 py-1 text-white text-[18px] font-inter rounded-full" onClick={goToContactPage}>Get Started</button>
                    </div>

                    <div className='flex mt-10 ml-6'>
                        <div className='mr-16'>
                            <p className='font-inter font-bold'>50+</p>
                            <p className='font-inter font-semibold mt-2 text-[13px] text-slate-800'>Projects Done</p>
                        </div>
                        <div className='mr-16'>
                            <p className='font-inter font-bold'>40+</p>
                            <p className='font-inter font-semibold mt-2 text-[13px] text-slate-800'>Satisfied Clients</p>
                        </div>
                        <div>
                            <p className='font-inter font-bold'>24hr</p>
                            <p className='font-inter font-semibold mt-2 text-[13px] text-slate-800'>Support</p>
                        </div>
                    </div>

                    {!isModalShown && <div className='md:hidden md:fixed md:bottom-4 sm:hidden mx-4 flex w-full z-10 sm:flex-col sm:bg-white sm:bottom-0 sm:py-2'>
                        <div className='flex hover:cursor-pointer'>
                            <img src={whats} alt='pic' className='h-4 mr-2'/>
                            <Link className='text-[12px] font-semibold font-barlow' to='https://wa.me/+254727937157'>+254727937157</Link>
                        </div>
                        
                        <div className='flex sm:mb-6 ml-6 mr-8'>
                            <p className='font-lily text-[12px]'>Social Media Links</p>
                            <img src={twitter} alt='pic' className='h-[14px] mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={face} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={insta} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                            <img src={linked} alt='pic' className='h-4 mx-2 hover:cursor-pointer mt-[2px]'/>
                        </div>

                        <div className='flex mb-[-2px] hover:cursor-pointer'>
                            <img src={send} alt='pic' className='h-3 mt-[2px] mr-2'/>
                            <a href="mailto:analystmuli@gmail.com" className='text-[12px] font-semibold font-barlow'>Shoot us an email</a>
                        </div>
                    </div>}
            </div>
            {!isModalShown && <div className='w-[40%] sm:w-full sm:my-6 sm:hidden'>
                {/* <img src={vector} alt='pic' className='h-[85vh]'/> */}
                <VideoPlayer/>
                <div className='absolute bottom-2 right-[5%] bg-white shadow-custom py-4 px-8 rounded'>
                    <Link to = 'https://wa.me/+254727937157' className='flex mb-4'>
                        <img src={whats} alt='pic' className='h-6'/>
                        
                        <p className='font-barlow ml-2 font-bold text-sm underline'>+254727937157</p>
                        
                    </Link>
                    <Link to = 'https://www.instagram.com/codeworks_solutions?igsh=MTVlaDhsMGQ3YThvcw==' className='flex mb-4'>
                        <img src={insta} alt='pic' className='h-6'/>
                        <p className='font-barlow ml-2 font-bold text-sm'>Codeworks</p>
                    </Link>
                    <Link to = 'https://www.facebook.com/profile.php?id=61565705875770&mibextid=ZbWKwL' className='flex mb-4'>
                        <img src={face} alt='pic' className='h-6'/>
                        <p className='font-barlow ml-2 font-bold text-sm'>Codeworks</p>
                    </Link>
                    <Link to = 'https://www.linkedin.com/in/codeworks-solutions-a076a129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='flex mb-4'>
                        <img src={linked} alt='pic' className='h-6'/>
                        <p className='font-barlow ml-2 font-bold text-sm'>Codeworks</p>
                    </Link>
                </div>
                {/* <VideoPlayer/> */}
            </div>}
        </div>

        {/* {!isModalShown && <AboutPage/>}
        {!isModalShown && <Services/>}
        {!isModalShown && <ContactsPage/>} */}


        {!isModalShown && <Industries/>}

        {!isModalShown && <WorkingProcess/>}
        {!isModalShown && <WhyChooseUs/>}
        {!isModalShown && <Technologies/>}

        {!isModalShown && <LocationContact/>}
        {!isModalShown && <FrequentQns/>}

        {!isModalShown && <CallToAction/>}
        {!isModalShown && <NewsLetter/>}
        {!isModalShown && <CustomFooter/>}
        
    </section>
}