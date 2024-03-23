import Header from '@/components/header/header'
import Link from 'next/link'
import React, { useState } from 'react'
import login_logo from "../../public/assets/images/login_logo.png";
import Image from 'next/image';

export default function Login() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [showOTPField, setShowOTPField] = useState(false);
    

    const handleSendOTP = () => {
        // Logic to send OTP to the entered mobile number
        // For now, just toggling the OTP field visibility
        setShowOTPField(true);
    }

    const handleVerifyOTP = () => {
        // Logic to verify OTP
        // For now, just logging the OTP
        console.log("OTP Verified!");
    }

    return (
        <section className="h-full flex flex-col justify-between">

            <div className="flex flex-col gap-5 justify-center items-center pt-8">
                <div className="flex justify-center items-center pb-5">
                    <Image src={login_logo} alt="/" />
                </div>
                <div className='font-bold text-center w-[75%]'>
                    <h1 className='text-[20px] font-bold text-[#002395] pb-3'>
                        Login to start!
                    </h1>
                    <p className='text-[16px] text-[#141D3A] pb-5'>Simply login with your mobile number and start winning!</p>
                </div>

                <div className='flex flex-col gap-3 justify-center items-center w-[360px] h-[44px] '>
                    <div className='flex'>
                        <div className='border-2 bg-white border-[#AFBADE] sm:w-28 flex items-center p-2 w-[60px] font-bold text-[15px]  text-center rounded-s-full'>
                            <span className='w-full'>+91</span>
                        </div>
                        <div className=''>
                            <input type="text" placeholder='Mobile Number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className='p-2 rounded-e-full w-[300px] border-2 border-[#AFBADE] border-l-0' />
                        </div>
                    </div>
                    {showOTPField && (
                        <div className='flex'>
                            <div className='border-2 bg-white border-[#AFBADE] sm:w-28 flex items-center p-2 w-[60px] font-bold text-[15px]  text-center rounded-s-full'>
                                <span className='w-full'>OTP</span>
                            </div>
                            <div className=''>
                                <input type="text" placeholder='OTP' className='p-2 rounded-e-full w-[300px] border-2 border-[#AFBADE] border-l-0' />
                            </div>
                        </div>
                    )}

                </div>
                {!showOTPField ? (
                    <div className='pt-5'>
                        <div onClick={handleSendOTP} className='w-[360px] h-[44px]  bg-[#002395] text-white font-bold  text-center rounded-full  p-2 text-[15px] cursor-pointer hover:bg-blue-800 hover:text-white'>
                            <span className=''>SEND OTP</span>
                        </div>
                    </div>
                ) : (
                    <Link href='/home' >
                        <p className='py-5 text-center text-[#DD4B39] text-[13px]'>OTP is valid for 57 seconds.</p>
                        <div onClick={handleVerifyOTP} className='w-[360px] h-[44px]  bg-[#002395] text-white font-bold  text-center rounded-full  p-2 text-[15px] cursor-pointer hover:bg-blue-800 hover:text-white'>
                            <span className=''>VERIFY</span>
                        </div>
                    </Link>
                )}
            </div>
            <div className='flex justify-end fixed bottom-0 sm:w-[480px] w-[99%] text-[12px] text-[#141D3A] p_width items-end p-5 '>
                <p className='text-start'>
                    By continuing I agree that FireLudo may store and process my data in accordance with the Terms of Use, Privacy Policy and that I am 18 years or older. I am not playing from Assam, Odisha, Nagaland, Sikkim, Meghalaya, Andhra Pradesh, or Telangana.
                </p>
            </div>
        </section>
    )
}
