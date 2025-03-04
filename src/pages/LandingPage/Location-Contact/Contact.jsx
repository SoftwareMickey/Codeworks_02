import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Contacts(){
    return <section className="w-[50%] flex flex-col items-center">
        <div>
            <p className="text-center font-inter text-[30px] font-bold text-slate-800 mt-3 mb-6">Get in touch</p>
            <p className="font-inter text-slate-600 text-[13px] text-center">Ready to help your company scale faster? Let&apos;s chat about we can help.</p>
        </div>

        <div className="flex flex-col items-start mt-6 w-[80%]">
            <p className="font-inter text-[14px] font-semibold mb-2">Chat to sales</p>
            <p className="text-[13px] font-inter text-slate-600">Have a quick question? Need real-time assistance? Our support team is just a message away! Connect with us via live chat and get instant responses to your queries.</p>
            <a href='https://wa.me/+254727937157' className="flex mt-2">
                <FaWhatsapp size={20} className='mr-2'/>
                <p className='text-[13px] font-medium font-inter text-slate-600'>Chat</p>
            </a>            
        </div>

        <div className="flex flex-col items-start mt-6 w-[80%]">
            <p className="font-inter text-[14px] font-semibold mb-2">Email Support</p>
            <p className="text-[13px] font-inter text-slate-600">Prefer to communicate via email? Drop us a message, and our team will get back to you as soon as possible. </p>
            <a href='https://wa.me/+254727937157' className="flex mt-2">
                <GoMail size={20} className='mr-2'/>
                <p className='text-[13px] font-medium font-inter text-slate-600'>Chat</p>
            </a>            
        </div>

        <div className="flex flex-col items-start mt-6 w-[80%]">
            <p className="font-inter text-[14px] font-semibold mb-2">Call Us</p>
            <p className="text-[13px] font-inter text-slate-600">Sometimes, a direct conversation is the best way to get things sorted. Give us a call, and our friendly team will assist you with all your queries</p>
            <a href="tel:+254727937157" className="flex mt-2">
                <FaPhoneAlt size={20} className='mr-2'/>
                <p className='text-[13px] font-medium font-inter text-slate-600'>+254727937157</p>
            </a>            
        </div>

        <div className="flex flex-col items-start mt-6 w-[80%]">
            <p className="font-inter text-[14px] font-semibold mb-2">Meet Us in Person</p>
            <p className="text-[13px] font-inter text-slate-600">Want to visit our office? We’d love to meet you! Whether it’s for a project discussion, partnership opportunities, or just a friendly chat about tech, our doors are open.</p>
            <p className="text-[13px] font-inter text-slate-600 font-medium mt-4 ml-2">Office Hours: Monday – Friday, 9:00 AM – 5:00 PM  (EAT)</p> 
            <div className="flex mt-1 ml-1">
                <MdOutlineLocationOn className="mt-[1px] mr-1"/>
                 <div className='flex items-center'>
                    <a href="https://g.co/kgs/zYjsCd9">
                        <p className='text-[13px] font-inter font-medium text-slate-600'> LE MAC, CHURCH ROAD, WESTLANDS</p>
                    </a>
                </div>
            </div>         
        </div>

    </section>
}