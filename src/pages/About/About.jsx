import { useLocation, useNavigate } from 'react-router';
import '../../index.css'
import back from './../../../public/previous.png';
import { useEffect, useState } from 'react';
import CustomFooter from '../reusable/CustomFooter';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

export default function AboutPage(){

    const location = useLocation();
    const [hideBackButton, setHideBackButton] = useState(false);
    const [dynamicWidth, setDynamicWidth] = useState('pt-40');
    const [dynamicFooter, setDynamicFooter] = useState(false);

    useEffect(() => {
        if(location.pathname == '/about'){
            setHideBackButton(true);
            setDynamicWidth('pt-16');
            setDynamicFooter(true);
        }
    }, [])

    const navigator = useNavigate();

    function BackHandler(){
        navigator(-1);
    }
    return <section className=''>

        {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler}/>}
        <div id="about-section" className='pb-10 mb-10'>
        <p className='mt-8 text-center bg-green-50 w-max mx-auto px-4 py-2 rounded-full border border-green-100 font-inter text-[13px] font-medium text-slate-800'>Know Your Partner</p>
            <p className={`text-center w-[60%] mx-auto ${dynamicWidth} font-poppins font-bold text-[40px] sm:w-full sm:text-[18px]`}>Empowering <span className='text-[midnightblue]'>Businesses</span> Through Innovation and Technology</p>
            <p className="font-inter text-center text-[14px] text-slate-600 w-[60%] mt-8 mx-auto sm:w-full sm:text-center leading-7">At CodeWorks, we believe in the power of technology to transform businesses, solve complex challenges, and create lasting impact. As a full-service software development company, we specialize in crafting intelligent, high-performance, and scalable solutions tailored to meet the evolving needs of businesses across diverse industries.</p>
        </div>

        <div className='flex justify-center space-x-6'>
            <div className='w-[40%]'>
                <p className='font-barlow text-slate-600 mb-4'>01</p>
                <p className='mb-4 font-extralight font-inter'>Who we are</p>
                <p className='font-inter text-[14px] text-slate-600 leading-7'>We are more than just a software development company—we are strategic partners in digital transformation. Our team consists of highly skilled engineers, designers, and business strategists dedicated to building future-ready technology solutions that drive growth and success.</p>

                <p className='mt-4 font-inter text-[14px] text-slate-600 leading-7'>Interested in joining us?</p>
                <button className='text-white bg-[midnightblue] px-4 py-2 text-[13px] font-inter rounded-full mt-4'>Get Started</button>
            </div>

            <div className='flex flex-col mt-12 w-[40%]'>
                <BiSolidQuoteAltLeft className="text-green-800 ml-1 mb-4"/>
                <hr className='w-[20%] mb-8 border-2 border-green-600 ml-2'/>
                <div className='flex'>
                    {/* <RiDoubleQuotesL/> */}
                    <p className='text-[18px] font-lily font-medium leading-7'>"Beyond software development, we are your strategic partners<br/> in digital transformation—an elite team of engineers, designers, <br/>and strategists committed to <br/>building future-ready solutions that fuel growth and success."</p>
                    {/* <RiDoubleQuotesR/> */}
                </div>
                <div>
                    <p className='font-gupter ml-4 mt-4'>Codeworks Development Team</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center space-x-6'>
            <div className='flex flex-col mt-12 w-[40%]'>
                <BiSolidQuoteAltLeft className="text-green-800 ml-1 mb-4"/>
                <hr className='w-[20%] mb-8 border-2 border-green-600 ml-2'/>
                <div className='flex'>
                    {/* <RiDoubleQuotesL/> */}
                    <p className='text-[18px] font-lily leading-7 font-medium'>"Empowering businesses with cutting-edge technology, <br/>we craft tailor-made solutions that enhance digital presence, <br/>streamline operations, and drive efficiency across industries"</p>
                    {/* <RiDoubleQuotesR/> */}
                </div>
                <div>
                    <p className='font-gupter ml-4 mt-4'>Codeworks CEO</p>
                </div>
            </div>

            <div className='w-[40%]'>
                <p className='font-barlow text-slate-600 mb-4'>02</p>
                <p className='mb-4 font-extralight font-inter'>What We Do</p>
                <p className='font-inter text-[14px] text-slate-600 leading-7'>We specialize in a wide range of technology-driven solutions designed to meet the diverse needs of businesses. Our expertise spans across multiple industries, providing tailor-made solutions for businesses looking to enhance their digital presence, improve operations, and optimize efficiency.</p>

                <p className='mt-4 font-inter text-[14px] text-slate-600 leading-7'>Interested in joining us?</p>
                <button className='text-white bg-[midnightblue] px-4 py-2 text-[13px] font-inter rounded-full mt-4'>Get Started</button>
            </div>
        </div>

        <div className='flex justify-center space-x-6 bg-gradient-to-b from-white to-slate-200'>
            <div className='w-[40%] mb-20'>
                    <p className='font-barlow text-slate-600 mb-4'>03</p>
                    <p className='mb-4 font-extralight font-inter'>How We Can Help You</p>
                    <p className='font-inter text-[14px] text-slate-600 leading-7'>At CodeWorks, we don’t just develop software. We help businesses leverage technology to unlock new opportunities, optimize operations, and drive success. Whether you’re looking to build a new product, scale your existing solutions, or automate business processes, we have the expertise to make it happen.</p>

                    <p className='mt-4 font-inter text-[14px] text-slate-600 leading-7'>Interested in joining us?</p>
                    <button className='text-white bg-[midnightblue] px-4 py-2 text-[13px] font-inter rounded-full mt-4'>Get Started</button>
            </div>
            <div className='flex flex-col mt-20 w-[40%]'>
                <BiSolidQuoteAltLeft className="text-green-800 ml-1 mb-4"/>
                <hr className='w-[20%] mb-8 border-2 border-green-600 ml-2'/>
                <div className='flex'>
                    {/* <RiDoubleQuotesL/> */}
                    <p className='text-[18px] font-lily leading-7 font-medium'>We don’t just build software—we build solutions that empower <br/>businesses to innovate, scale, and thrive in a digital world</p>
                    {/* <RiDoubleQuotesR/> */}
                </div>
                <div>
                    <p className='font-gupter ml-4 mt-4'>Codeworks Coo</p>
                </div>
            </div>
        </div>

        {dynamicFooter && <CustomFooter/>}
    </section>
}   