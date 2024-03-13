import React from 'react'
import {FcBullish} from 'react-icons/fc'
export const Sidebar = () => {
  return (
    <div className='flex flex-col p-3 text-white bg-neutral-900 w-60'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <FcBullish />
            <span className='text-lg text-neutral-100'>OpenShop</span>
        </div>
        <div className='flex-1 '></div>
        <div className=''>bottom-part</div>
    </div>
    )
}
