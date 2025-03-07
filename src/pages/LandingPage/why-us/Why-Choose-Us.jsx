import { BsArrowRight } from "react-icons/bs";

export default function WhyChooseUs(){
    return <section>
        <p className="text-center text-[30px] font-inter font-bold">Why <span className="text-[midnightblue]">choose</span> codeworks</p>
        <p className="mt-4 font-inter text-[14px] w-[80%] text-center mx-auto text-slate-600 mb-12">Choosing the right technology partner is critical to the success of your project. At CodeWorks, we don’t just build software, we craft high-performance, scalable, and intelligent solutions that help businesses grow, innovate, and lead in their industries.</p>

        <div className="flex justify-center space-x-10 mb-10 sm:flex-col sm:space-x-4">
            <div className="w-[27%] sm:w-[90%] sm:mx-auto sm:border-none border-r p-4 ">
                <p className="text-slate-600 mb-4 font-barlow">01</p>
                <p className="font-inter font-bold mb-4 text-slate-800">Expertise You Can Trust</p>
                <p className="font-inter text-[13px] text-slate-600 mt-2 italic h-[24vh] leading-7">With a team of highly skilled developers, engineers, and designers, we bring years of experience in web development, mobile applications, AI, automation, and cloud computing. We stay ahead of technological trends to deliver solutions that meet the demands of today and the future.</p>
                <button className="mt-6 sm:mt-0 border border-blue-800 px-4 py-2 text-blue-800 rounded-full">
                    <BsArrowRight className="text-blue-800"/>
                </button>
            </div>
            <div className="w-[27%] sm:w-[90%] sm:mx-auto sm:border-none border-r p-4">
                <p className="text-slate-600 mb-4 font-barlow">02</p>
                <p className="font-inter font-bold mb-4 text-slate-800">Tailor-Made Solutions for Your Business</p>
                <p className="font-inter text-[13px] text-slate-600 mt-2 italic h-[26vh] sm:h-[20vh] leading-7">We understand that every business is unique. That’s why we customize every project to fit your exact needs, ensuring that the final product is aligned with your goals, industry standards, and customer expectations.</p>
                <button className="mt-6 sm:mt-2 border border-blue-800 px-4 py-2 text-blue-800 rounded-full">
                    <BsArrowRight className="text-blue-800"/>
                </button>
            </div>
            <div className="w-[27%] sm:w-[90%] sm:mx-auto sm:border-none p-4 ">
                <p className="text-slate-600 mb-4 font-barlow">03</p>
                <p className="font-inter font-bold mb-4 text-slate-800 leading-7">Client-Centric Approach</p>
                <p className="font-inter text-[13px] text-slate-600 mt-2 italic h-[26vh] leading-7 sm:h-[20vh]">At CodeWorks, our success is measured by your success. We work closely with you to understand your goals and create solutions that drive measurable results. Our transparent communication ensures you are always in control.~</p>
                <button className="mt-6 sm:mt-2 border border-blue-800 px-4 py-2 text-blue-800 rounded-full">
                    <BsArrowRight className="text-blue-800"/>
                </button>
            </div>
        </div>
    </section>
}