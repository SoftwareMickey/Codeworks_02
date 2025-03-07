import './../../index.css';
import { useLocation } from 'react-router';
// import back from './../../../public/previous.png';
import { useEffect, useState } from 'react';
import CustomFooter from '../reusable/CustomFooter';
// import whatsA from './assets/whatsA.png';

import 'react-phone-input-2/lib/style.css';
import ContactsForm from './ContactsForm';

export default function ContactsPage() {
    const location = useLocation();
    // const [hideBackButton, setHideBackButton] = useState(false);
    const [dynamicWidth, setDynamicWidth] = useState('mt-10');
    const [dynamicTopPx, setDynamicTopPx] = useState('pt-44');
    const [dynamicFooter, setDynamicFooter] = useState(false);


    // const navigator = useNavigate();

    useEffect(() => {
        console.log(`The current location is: ${location.pathname}`);
        if (location.pathname === '/contacts') {
            setDynamicWidth('mt-96');
            // setHideBackButton(true);
            setDynamicTopPx('pt-16');
            setDynamicFooter(true);
        }
    }, [location.pathname]);

    // function BackHandler() {
    //     navigator(-1);
    // }

    return (
        <section className={`sm:${dynamicWidth}`}>
            {/* {hideBackButton && <img src={back} alt='pic' className='h-6 px-4 mt-4 md:hidden' onClick={BackHandler} />} */}
            <div>
                <p className={`text-center ${dynamicTopPx} pt-16 font-bold text-[40px] font-poppins sm:text-[24px] sm:w-[80%] sm:mx-auto`}>
                    We have got an entire team dedicated <br className='sm:hidden'/>to supporting you and your business
                </p>
                <p className="text-center mt-4 font-inter text-slate-800 sm:w-[80%] sm:mx-auto text-[14px]">
                    Got any questions about product or scaling on our platform? We are here to help.
                </p>
                <p className="text-center font-inter text-slate-800 sm:w-[80%] sm:mx-auto text-[14px] sm:mt-2">
                    Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
                </p>
            </div>


            <ContactsForm/>
            {dynamicFooter && <CustomFooter />}
        </section>
    );
}
