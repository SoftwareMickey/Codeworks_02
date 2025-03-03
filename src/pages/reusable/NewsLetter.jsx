import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";

export default function NewsLetter(){

    const [isFocused, setIsFocused] = useState(false);

    return <section className="pt-10 bg-slate-100 w-full pb-10">
        <div className="flex justify-between w-[90%] mx-auto mb-6">
            <div>
                <p className="font-inter font-bold text-[20px]">Join our newsletter to 
                <br/>keep up to date with us!</p>
            </div>
            <div className="flex">
                <div className="flex border bg-slate-100  border-slate-300 rounded-full h-max">
                    <FaRegUser className="ml-4 mr-2 mt-2 text-slate-400"/>
                    <input 
                        placeholder="i.e johndoe@gmail.com"
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        className={`${isFocused? 'outline-none' : ''} bg-slate-100 mx-1 rounded-full py-2 px-2 font-inter text-[13px]`}
                    />
                </div>
                <div className="ml-4">
                    <button className="bg-[#6cc727] px-4 py-2 rounded-full text-white font-inter text-[13px]">Subscribe</button>
                </div>
            </div>
        </div>
        <hr className="text-slate-200 w-[90%] mx-auto"/>
    </section>
}