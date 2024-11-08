import Image from 'next/image';
import React from 'react';
import contact from "@/assets/img/handShak.jpg"

const Contact = () => {
    return (
        <div className="bg-white  flex items-center max-[640px]:flex-col" id="Contact">
            <div className='h-[100%] flex1 overflow-hidden '>
                <Image className='h-[100%] ' src={contact} alt="" />
            </div>
            <div className='h-[70%] flex1 flex flex-col items-center justify-center'>
                <h2 className='text-[30px] max-[640px]:text-[25px] overflow-hidden'>با ما در ارتباط باشید...</h2>
                    <form action="" className='w-[100%] h-[100%] flex flex-col items-center justify-evenly'>
                        <input className='max-[640px]:w-[300px] portBoxShadow w-[300px] p-3 h-[45px] text-[14px] border border-solid border-violet-700 m-1 rounded-md' type="text" name="" placeholder='ایمیل' id="" />
                        <textarea className='portBoxShadow max-[640px]:w-[300px]  w-[300px] p-3 h-[250px] text-[14px] border border-solid border-violet-700 m-1 rounded-md' type="text" name="" placeholder='متن پیام ...' id="" />
                        <button className='w-[150px] h-[45px] text-[14px] text-white portBoxShadow hover:shadow-none bg-violet-700 rounded-lg m-1 cursor-pointer' type="submit" value="" > ارسال</button>
                    </form>                
            </div>
        </div>
    );
};

export default Contact;