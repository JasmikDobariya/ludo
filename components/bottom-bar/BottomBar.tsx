import React from 'react'

export default function BottomBar() {
  return (
    <div className="sticky bottom-0  w-full">
      <div className="bg-slate-600 flex justify-between items-center w-full py-3 px-8 ">
        <div className="flex flex-col justify-center text-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
          <button className="mt-1 text-white">Profile</button>
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#fff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
          <button className="mt-1 text-white">Wallet</button>
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>

          <button className="mt-1 text-white">History</button>
        </div>
      </div>
    </div>
  )
}
