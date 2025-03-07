import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function WorkingProcess(){
    return <section className="py-16">
        <p className="text-center text-[30px] font-inter font-bold text-slate-800">Our working process</p>
        <p className="mt-4 font-inter text-[14px] w-[80%] text-center mx-auto text-slate-600 mb-12 leading-7">At CodeWorks, we follow a structured yet flexible approach to ensure that every project is delivered efficiently, on time, and to the highest quality standards. Our process is designed to turn ideas into powerful digital solutions while keeping you involved at every stage.</p>

        <div className="flex justify-center space-x-10 sm:space-x-4 sm:flex-col">
            <div className="w-[40%] sm:w-[90%] sm:mx-auto p-4 border border-blue-800 bg-gradient-to-b from-blue-50 rounded-lg h-[37vh] sm:h-max">
                <p className="font-inter font-semibold">Discovery & Consultation</p>
                <p className="font-inter text-[15px] my-2">Understanding Your Vision</p>
                <p className="text-[13px] font-inter text-slate-600 leading-6">We start by discussing your project needs, business goals, and expectations. Our team listens carefully to your challenges and objectives to craft a tailored solution.</p>
                <div className="space-y-2 mt-3">
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600">Free initial consultation</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600">Requirement gathering & feasibility study</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600">Identifying key objectives & target audience</p>
                    </div>
                </div>
            </div>
            <div className="w-[40%] sm:w-[90%] sm:mx-auto p-4 border rounded-lg mt-20 sm:mt-10 sm:h-max">
                <p className="font-inter font-semibold">Research & Planning</p>
                <p className="font-inter text-[15px] my-2">Laying the Foundation for Success</p>
                <p className="text-[13px] font-inter text-slate-600 leading-6">Once we understand your needs, we dive into research and planning. We analyze market trends, competitors, and the latest technologies to create a solid roadmap for your project.</p>
                <div className="space-y-2 mt-3">
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Wireframing & prototyping</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Project timeline & milestones</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]"> Technology stack selection</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center space-x-10 sm:mt-6 sm:flex-col sm:space-x-4">
            <div className="w-[40%] sm:w-[90%] sm:mx-auto p-4 border rounded-lg h-[40vh] sm:h-max">
                <p className="font-inter font-semibold">Design & User Experience</p>
                <p className="font-inter text-[15px] my-2">Creating an Intuitive & Engaging Experience</p>
                <p className="text-[13px] font-inter text-slate-600 leading-6">Our design team transforms ideas into visually stunning and user-friendly interfaces. We focus on a seamless user experience (UX) to ensure your audience engages effortlessly with your product.</p>
                <div className="space-y-2 mt-3">
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]"> UI/UX design with modern aesthetics</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Interactive prototypes & design revisions</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">User-centric approach for maximum engagement</p>
                    </div>
                </div>
            </div>
            <div className="w-[40%] sm:w-[90%] sm:mx-auto sm:mt-6 p-4 border border-blue-800 bg-gradient-to-b from-blue-50 rounded-lg mt-20 sm:h-max">
                <p className="font-inter font-semibold">Development & Implementation</p>
                <p className="font-inter text-[15px] my-2">Building a High-Performance Solution</p>
                <p className="text-[13px] font-inter text-slate-600 leading-6">Our expert developers bring the designs to life using cutting-edge technologies. We ensure scalability, security, and efficiency in every line of code we write.</p>
                <div className="space-y-2 mt-3">
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600">Backend & frontend development</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600">Continuous testing for stability & performance</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center space-x-10 mt-10 sm:mt-4 sm:space-x-6 sm:flex-col">
            <div className="w-[40%] sm:w-[90%] sm:mx-auto p-4 border rounded-lg h-[40vh] sm:h-max">
                <p className="font-inter font-semibold">Testing & Quality Assurance</p>
                <p className="font-inter text-[15px] my-2">Ensuring a Bug-Free & Reliable Product</p>
                <p className="text-[13px] font-inter text-slate-600 leading-6">Before launch, we conduct rigorous testing to guarantee that everything runs smoothly. Our QA team performs functionality, security, and performance testing to deliver a flawless product.</p>
                <div className="space-y-2 mt-3">
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Manual & automated testing</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Security & performance checks</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">User acceptance testing (UAT)</p>
                    </div>
                </div>
            </div>
            <div className="w-[40%] sm:w-[90%] sm:mx-auto sm:mt-10 p-4 border rounded-lg mt-20 sm:h-max">
                <p className="font-inter font-semibold">Deployment & Launch</p>
                <p className="font-inter text-[15px] my-2">Bringing Your Vision to Life</p>
                <p className="text-[13px] font-inter text-slate-600 leading-6">Once everything is tested and approved, we deploy the solution to your preferred environment. We ensure a smooth transition with zero downtime and post-launch monitoring.</p>
                <div className="space-y-2 mt-3">
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Secure & seamless deployment</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Performance optimization</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-[midnightblue]">Live monitoring & support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="ml-28 sm:ml-2 sm:mt-4">
            <div className="w-[40%] sm:w-[90%] sm:mx-auto p-4 border border-blue-800 bg-gradient-to-b from-blue-50 rounded-lg h-[40vh] sm:h-max">
                <p className="font-inter font-semibold">Ongoing Support & Maintenance</p>
                <p className="font-inter text-[15px] my-2">Ensuring Long-Term Success</p>
                <p className="text-[13px] font-inter text-slate-600 leading-6">Our journey doesn’t end at launch! We provide ongoing support, updates, and optimizations to ensure your software remains secure, fast, and up to date.</p>
                <div className="space-y-2 mt-3">
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600">Bug fixes & performance enhancements</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600"> Feature updates & scalability improvements</p>
                    </div>
                    <div className="flex">
                        <IoIosCheckmarkCircleOutline className="mt-[1px] text-[midnightblue] mr-1"/>
                        <p className="font-inter text-[12px] font-medium text-slate-600">Dedicated support team for any issues</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}