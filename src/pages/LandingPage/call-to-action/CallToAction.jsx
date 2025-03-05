export default function CallToAction(){
    return <section className="py-10 bg-blue-950 w-[90%] rounded-xl mx-auto">

        <p className="text-center text-slate-300 mt-8 font-inter text-[14px]">Get a Free Consultation Today!</p>
        <div className=" mt-4 flex flex-col items-center text-slate-300 font-inter text-[13px] space-y-2">
            <p>Call Us: (+254) 712-345-678</p>
            <p>Email: contact@codeworks.com</p>
            <p>Let’s Talk: Schedule a Meeting</p>
        </div>

        <div className="flex flex-col items-center mt-8">
            <p className="text-slate-300 text-[14px]">Ready to Transform Your Business?</p>
            <button className="bg-white px-4 rounded-full mt-4 font-inter text-[13px] py-2 text-[midnightblue] font-semibold">Get Started Now</button>
        </div>
    </section>
}