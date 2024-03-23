import Image from 'next/image'
import React from 'react'


export default function Home() {
    return (
        <section>
            <div className='p-5' >
                <div className='p-5 flex justify-between items-center bg-[##FAE4E1]  border-2 border-[#DD4B39] rounded-xl '>
                    <div className='py-3 p-5'>
                        <h1 className='text-[#141D3A]'>Your KYC is pending.</h1>
                    </div>
                    <div className=' border-2'>
                        <button className='text-[#141D3A]'>COMPLETE HERE</button>
                    </div>


                </div>
            </div>

        </section>
    )
}
