import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import header_logo from '/public/assets/images/header_logo.png'
import Link from 'next/link';
import HomePage_logo from '../../public/assets/images/HomePage_logo.png'

export default function Header({ onLogoClick, verifyingOTP }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [isInsideToggle, setIsInsideToggle] = useState(false);
    const toggleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!isInsideToggle && isOpen && toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, isInsideToggle]);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    const handleToggleClick = () => {
        setIsInsideToggle(true);
        console.log("Toggle clicked");
        toggleContent(); 
    };

    const handleSidebarClick = () => {
        setIsInsideToggle(true);
    };

    return (
        <>
            {verifyingOTP ?
                (<header className="sticky top-0 sm:w-[471px] w-full rounded-t-xl z-20 bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-3 md:py-4 flex gap-3">
                        <div onClick={handleToggleClick} className='cursor-pointer'> {/* Updated onClick event */}
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29 22C29 22.3315 28.8683 22.6495 28.6339 22.8839C28.3995 23.1183 28.0815 23.25 27.75 23.25H8.25C7.91848 23.25 7.60054 23.1183 7.36612 22.8839C7.1317 22.6495 7 22.3315 7 22C7 21.6685 7.1317 21.3505 7.36612 21.1161C7.60054 20.8817 7.91848 20.75 8.25 20.75H27.75C28.0815 20.75 28.3995 20.8817 28.6339 21.1161C28.8683 21.3505 29 21.6685 29 22ZM8.25 13.25H35.75C36.0815 13.25 36.3995 13.1183 36.6339 12.8839C36.8683 12.6495 37 12.3315 37 12C37 11.6685 36.8683 11.3505 36.6339 11.1161C36.3995 10.8817 36.0815 10.75 35.75 10.75H8.25C7.91848 10.75 7.60054 10.8817 7.36612 11.1161C7.1317 11.3505 7 11.6685 7 12C7 12.3315 7.1317 12.6495 7.36612 12.8839C7.60054 13.1183 7.91848 13.25 8.25 13.25ZM35.75 30.75H8.25C7.91848 30.75 7.60054 30.8817 7.36612 31.1161C7.1317 31.3505 7 31.6685 7 32C7 32.3315 7.1317 32.6495 7.36612 32.8839C7.60054 33.1183 7.91848 33.25 8.25 33.25H35.75C36.0815 33.25 36.3995 33.1183 36.6339 32.8839C36.8683 32.6495 37 32.3315 37 32C37 31.6685 36.8683 31.3505 36.6339 31.1161C36.3995 30.8817 36.0815 30.75 35.75 30.75Z" fill="#141D3A" />
                            </svg>
                        </div>
                        <div className="cursor-pointer" onClick={onLogoClick}>
                            <Image src={HomePage_logo} alt="/" />
                        </div>
                    </div>
                    <div ref={toggleRef} className={`bg-white fixed top-0 left-0 w-[300px] h-full z-50 overflow-hidden transition-all duration-300 ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} onClick={handleSidebarClick}>
                        <div className='flex flex-col justify-start gap-5 py-10 px-5'>
                            <Link href='page-1'>
                                <div className='hover:bg-amber-200 p-5 cursor-pointer'>
                                    <button>Page-1</button>
                                </div>
                            </Link>
                            <Link href='page-2'>
                                <div className='hover:bg-amber-200 p-5 cursor-pointer'>
                                    <button>Page-2</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </header>)
                :
                (<header className="sticky top-0 sm:w-[471px] w-full rounded-t-xl z-20 bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-3 md:py-4 flex justify-center items-center">
                        <div className="cursor-pointer" onClick={onLogoClick}>
                            <Image src={header_logo} alt="/" />
                        </div>
                    </div>
                </header>)
            }
        </>
    );
}
