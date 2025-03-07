import { useLocation } from 'react-router';
// import back from './../../../public/previous.png'
import { useEffect, useState } from "react";
import CustomFooter from "../reusable/CustomFooter";
// import codevidaa from '../LandingPage/animations/code2.mp4';

import phone from './assets/phone.png'
import web from './assets/web.png'
import dashboard from './assets/dashboard.png'

export default function Services(){
    // const navigator = useNavigate();

    const location = useLocation();
    // const [hideBackButton, setHideBackButton] = useState(false);
    const [dynamicFooter, setDynamicFooter] = useState(false);

    useEffect(() => {
        if(location.pathname == '/services'){
            // setHideBackButton(true);
            setDynamicFooter(true);
        }
    }, [])

    // * Got to a specific page
    // function goToContactPage(){
    //     navigator("/contacts#contacts-section")
    // }

    // function BackHandler(){
    //     navigator(-1);
    // }

    return <section id="services" className="">
        {/* {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>} */}

        <p className='mt-8 text-center bg-green-50 w-max mx-auto px-4 py-2 rounded-full border border-green-100 font-inter text-[13px] font-medium text-slate-800'>Our services</p>
        <p className='text-center mt-10 font-inter font-bold text-[30px]'>Innovative Technology <span className='text-blue-900'>Solutions</span> Tailored for Your Business</p>

        <p className='w-[80%] mt-8 mx-auto text-center font-inter text-[14px] text-slate-600 leading-7 sm:w-[90%]'>At CodeWorks, we offer a comprehensive range of cutting-edge software solutions designed to help businesses innovate, scale, and thrive in today’s digital landscape. Whether you&apos;re a startup, an enterprise, or an organization looking for digital transformation, we have the expertise to deliver high-performance, secure, and scalable solutions that meet your unique needs.</p>

        <div className='flex justify-center mt-16 mb-20 space-x-10 sm:flex-col sm:space-y-8'>
            <div className='mt-8 w-[40%] sm:w-[90%] sm:ml-6'>
                <p className='font-barlow text-slate-600 mb-4'>01</p>
                <p className='font-inter font-medium mb-6 text-slate-800'>Mobile App Development</p>
                <p className='font-inter text-[13px] text-slate-600 leading-7'>In today’s fast-paced digital world, mobile applications are the backbone of business growth, customer engagement, and operational efficiency. At CodeWorks, we specialize in building powerful, intuitive, and scalable mobile applications that elevate businesses, enhance user experiences, and unlock new opportunities.

                Whether you need a consumer-facing app, an enterprise solution, or a cross-platform application, our team of expert developers ensures that your app is not only functional but also highly responsive, secure, and performance-driven.</p>
                <p className='font-inter text-[13px] text-green-600 leading-7 mt-4 font-medium'>Ready to Build Your Next Mobile App?</p>
                <button className='bg-blue-900 px-4 py-[6px] text-white font-inter text-[13px] mt-4 rounded-full'>Get In Touch</button>
            </div>
            <div className='w-[30%] mx-auto flex justify-center items-center sm:w-[80%] sm:mt-6'>
                <img src={phone} alt='pic' className='h-[70vh] sm:h-[50vh]'/>
            </div>
        </div>

        <div className='flex justify-center mt-16 mb-20 space-x-10 sm:flex-col sm:space-y-4'>
            <div className='w-[40%] sm:w-[80%] sm:hidden'>
                <img src={web} alt='pic' className='w-[100%] border rounded-lg mt-6  sm:h-[50vh]'/>
            </div>
            <div className='mt-8 w-[40%] sm:w-[90%] sm:ml-6'>
                <p className='font-barlow text-slate-600 mb-4'>02</p>
                <p className='font-inter font-medium mb-6 text-slate-800'>Website Development</p>
                <p className='font-inter text-[13px] text-slate-600 leading-7'>A strong online presence is the foundation of any successful business in the digital era. At CodeWorks, we specialize in creating modern, high-performance, and user-friendly websites that drive engagement, increase conversions, and enhance brand visibility. Whether you need a simple landing page, a complex e-commerce platform, or a custom enterprise solution, we have the expertise to deliver a website tailored to your business needs.</p>
                <p className='font-inter text-[13px] text-green-600 leading-7 mt-4 font-medium'>Ready to Take Your Online Presence to the Next Level?</p>
                <button className='bg-blue-900 px-4 py-[6px] text-white font-inter text-[13px] mt-4 rounded-full'>Get In Touch</button>
            </div>
            <div className='w-[40%] sm:w-[80%] lg:hidden'>
                <img src={web} alt='pic' className='w-[100%] border rounded-lg mt-6  sm:w-full'/>
            </div>
        </div>

        <div className='flex justify-center mt-16 mb-20 sm:mb-0 space-x-16 sm:flex-col sm:space-y-4'>
            <div className='mt-8 w-[35%] sm:w-[90%] sm:ml-6'>
                <p className='font-barlow text-slate-600 mb-4'>03</p>
                <p className='font-inter font-medium mb-6 text-slate-800'>Custom Software Development</p>
                <p className='font-inter text-[13px] text-slate-600 leading-7'>At CodeWorks, we believe that off-the-shelf software isn’t always the best fit for every business. That’s why we specialize in custom software development, designing and building tailor-made solutions that align with your unique business requirements, workflows, and long-term objectives. Whether you need a Point of Sale (POS) system, Enterprise Resource Planning (ERP) software, or any other custom solution, we ensure that your business gets the right tools to scale efficiently.</p>
                <p className='font-inter text-[13px] text-green-600 leading-7 mt-4 font-medium'>Let’s Build the Perfect Software for Your Business!</p>
                <button className='bg-blue-900 px-4 py-[6px] text-white font-inter text-[13px] mt-4 rounded-full'>Get In Touch</button>
            </div>
            <div className='w-[45%] mx-auto flex justify-center items-center sm:hidden'>
                <img src={dashboard} alt='pic' className='h-[70vh] border rounded-lg mt-8 sm:w-full'/>
            </div>
        </div>

        <div className="bg-gradient-to-b from-white to-slate-200 h-[25vh] w-full sm:h-[10vh]"/>
        {dynamicFooter && <CustomFooter/>}
    </section>
}