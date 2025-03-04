import btn1 from './assets/btn1.png'
import price from './assets/price.png'
import dashboard from './assets/dashboard.png'
import maintain from './assets/maintain.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function FrequentQns(){

    return <section className="py-16">
        <p className="text-center font-inter font-bold">FAQs</p>
        <p className="text-center font-inter font-bold text-[34px] text-slate-800">Frequently asked questions</p>
        <p className="text-center text-slate-700 text-[13px] font-inter font-medium mt-4">These are the mostly aked questions about Codeworks</p>

        <div className='flex justify-center mt-6'>
            <img src={btn1} alt='pic' className='h-8 mx-3 hover:cursor-pointer'/>
            <img src={price} alt='pic' className='h-8 mx-3 hover:cursor-pointer'/>
            <img src={dashboard} alt='pic' className='h-8 mx-3 cursor-pointer'/>
            <img src={maintain} alt='pic' className='h-8 mx-3 cursor-pointer'/>
        </div>

        <div className="flex flex-col items-center mt-8 space-y-6">
            <div className='w-[60%]'>
                <div className='flex justify-between mb-2'>
                    <p className='font-inter text-[14px] font-bold'>What services does CodeWorks offer?</p>
                    <MdOutlineKeyboardArrowDown className='text-slate-600 mt-1'/>
                </div>
                <p className='text-[13px] font-inter text-slate-600'>We create modern, responsive, and scalable websites tailored to your business needs.From iOS to Android, we develop high-performance mobile applications using Flutter, React Native, and native technologie.We build enterprise-level applications to automate and optimize business processes.</p>
            </div>
            <div className='w-[60%]'>
                <div className='flex justify-between mb-2'>
                    <p className='font-inter text-[14px] font-bold'>How long does it take to develop a website or app?</p>
                    <MdOutlineKeyboardArrowDown className='text-slate-600 mt-1'/>
                </div>
                <p className='text-[13px] font-inter text-slate-600'>The timeline for developing a website or mobile app depends on various factors such as the complexity of the project, the features required, and the client&apos;s responsiveness in providing feedback.</p>
            </div>
            {/* <div className='w-[60%]'>
                <div className='flex justify-between mb-2'>
                    <p className='font-inter text-[14px] font-bold'>What industries do you work with?</p>
                    <MdOutlineKeyboardArrowDown className='text-slate-600 mt-1'/>
                </div>
                <p className='text-[13px] font-inter text-slate-600'>We work with businesses across multiple industries.</p>
            </div> */}
            <div className='w-[60%]'>
                <div className='flex justify-between mb-2'>
                    <p className='font-inter text-[14px] font-bold'>Can you develop a project based on my idea?</p>
                    <MdOutlineKeyboardArrowDown className='text-slate-600 mt-1'/>
                </div>
                <p className='text-[13px] font-inter text-slate-600'>Absolutely! If you have a brilliant idea but are unsure how to turn it into reality, CodeWorks can help. Our process includes:

                We discuss your idea, target audience, and expected features.
                We create wireframes and visual concepts to shape your vision.
                Our team of skilled developers builds the project using the latest technologies.
                We rigorously test your product to ensure a flawless launch.
                We provide maintenance, updates, and improvements as needed.</p>
            </div>
            {/* <div className='w-[60%]'>
                <div className='flex justify-between mb-2'>
                    <p className='font-inter text-[14px] font-bold'>What technologies do you use?</p>
                    <MdOutlineKeyboardArrowDown className='text-slate-600 mt-1'/>
                </div>
                <p className='text-[13px] font-inter text-slate-600'>We use the latest and most reliable technologies to develop high-quality software solutions,</p>
            </div> */}
            {/* <div className='w-[60%]'>
                <div className='flex justify-between mb-2'>
                    <p className='font-inter text-[14px] font-bold'>How much does software development cost?</p>
                    <MdOutlineKeyboardArrowDown className='text-slate-600 mt-1'/>
                </div>
                <p className='text-[13px] font-inter text-slate-600'>The cost of development depends on the complexity, features, and timeline of your project.</p>
            </div> */}
            <div className='w-[60%]'>
                <div className='flex justify-between mb-2'>
                    <p className='font-inter text-[14px] font-bold'>How do I get started with CodeWorks?</p>
                    <MdOutlineKeyboardArrowDown className='text-slate-600 mt-1'/>
                </div>
                <p className='text-[13px] font-inter text-slate-600'>Getting started is easy! Follow these steps:

                Fill out our contact form or email us at contact@codeworks.com.
                We’ll schedule a call to understand your requirements.
                We’ll send you a detailed project plan, timeline, and budget estimate.
                Once we agree, we begin designing and developing your software.
                After deployment, we provide ongoing maintenance and updates.</p>
            </div>
        </div>
    </section>
}