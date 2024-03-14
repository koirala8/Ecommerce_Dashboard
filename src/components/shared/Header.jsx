import React from 'react'
import { HiOutlineChatAlt, HiOutlineSearch, HiOutlineBell } from 'react-icons/hi'

export default function Header() {
  return (
    <div className='flex items-center justify-between h-16 px-4 bg-white'>
      <div>
        <div className='relative'><HiOutlineSearch fontSize={20} className='absolute text-gray-400 translate-y-1/2 left-3'/></div>
        <input type='text' placeholder='Search.....' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pr-4 pl-11'/>
    </div>
    <div className='flex items-center gap-2 mr-2'><HiOutlineChatAlt fontsize='24'/><HiOutlineBell fontsize='24'/></div>
    </div>
  )
}
