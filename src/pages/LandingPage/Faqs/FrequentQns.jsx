import btn1 from './assets/btn1.png';
import price from './assets/price.png';
import dashboard from './assets/dashboard.png';
import maintain from './assets/maintain.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

export default function FrequentQns() {

    const data = [
        {
            question: "What services does CodeWorks offer?",
            answer: "We create modern, responsive, and scalable websites tailored to your business needs. From iOS to Android, we develop high-performance mobile applications using Flutter, React Native, and native technologies. We build enterprise-level applications to automate and optimize business processes."
        },
        {
            question: "How long does it take to develop a website or app?",
            answer: "The timeline for developing a website or mobile app depends on various factors such as the complexity of the project, the features required, and the client’s responsiveness in providing feedback."
        },
        {
            question: "Can you develop a project based on my idea?",
            answer: "Absolutely! If you have a brilliant idea but are unsure how to turn it into reality, CodeWorks can help. Our process includes: \n\n 1.Discussing your idea, target audience, and expected features.\n 2.Creating wireframes and visual concepts to shape your vision.\n 3.Developing the project using the latest technologies.\n 4️.Testing rigorously to ensure a flawless launch.\n 5️.Providing maintenance, updates, and improvements as needed."
        },
        {
            question: "How do I get started with CodeWorks?",
            answer: "Getting started is easy! Follow these steps:\n\n 1.Fill out our contact form or email us at contact@codeworks.com.\n 2️.We’ll schedule a call to understand your requirements.\n 3️.We’ll send you a detailed project plan, timeline, and budget estimate.\n 4️.Once we agree, we begin designing and developing your software.\n 5️.After deployment, we provide ongoing maintenance and updates."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 }); // Detect scroll

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Framer Motion Variants
    const faqContainerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { staggerChildren: 0.2, duration: 1, ease: "easeInOut" } 
        }
    };

    const faqItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.section 
            className="py-16"
            ref={ref} 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={faqContainerVariants}
        >
            {/* Header Section */}
            <motion.p className="text-center font-inter font-bold" variants={faqItemVariants}>
                FAQs
            </motion.p>
            <motion.p className="text-center font-inter font-bold text-[34px] text-slate-800" variants={faqItemVariants}>
                Frequently Asked Questions
            </motion.p>
            <motion.p className="text-center text-slate-700 text-[13px] font-inter font-medium mt-4" variants={faqItemVariants}>
                These are the most commonly asked questions about CodeWorks.
            </motion.p>

            {/* Category Buttons */}
            <motion.div className="flex justify-center mt-6" variants={faqItemVariants}>
                {[btn1, price, dashboard, maintain].map((img, index) => (
                    <motion.img 
                        key={index}
                        src={img}
                        alt="pic"
                        className="h-8 mx-3 cursor-pointer hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                    />
                ))}
            </motion.div>

            {/* FAQ Items */}
            <motion.div className="flex flex-col items-center mt-8 space-y-6">
                {data.map((faq, index) => (
                    <motion.div 
                        key={index} 
                        className="w-[60%]" 
                        variants={faqItemVariants}
                    >
                        <div 
                            className="flex justify-between items-center mb-2 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <p className="font-inter text-[14px] font-bold">{faq.question}</p>
                            <motion.div 
                                animate={{ rotate: openIndex === index ? 180 : 0 }} 
                                transition={{ duration: 0.3 }}
                            >
                                <MdOutlineKeyboardArrowDown className="text-slate-600 mt-1" />
                            </motion.div>
                        </div>
                        {openIndex === index && (
                            <motion.p 
                                className="text-[13px] font-inter text-slate-600 leading-7"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {faq.answer}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
