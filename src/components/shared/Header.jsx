import {React} from "react";
import {
  HiOutlineChatAlt,
  HiOutlineSearch,
  HiOutlineBell,
} from "react-icons/hi";
import { Popover, Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-white">
      <div>
        <div className="relative">
          <HiOutlineSearch
            fontSize={20}
            className="absolute text-gray-400 translate-y-1/2 left-3"
          />
        </div>
        <input
          type="text"
          placeholder="Search....."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pr-4 pl-11"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5 rounded-sm">
                <HiOutlineChatAlt fontsize="24" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-[250px]">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="font-medium text-gray-700">
                      Messages
                    </strong>
                    <div className="py-1 mt-2 text-sm">
                      This is the messages panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-1.5 rounded-sm">
                <HiOutlineBell fontsize="24" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-[250px]">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="font-medium text-gray-700">
                      Notifications
                    </strong>
                    <div className="py-1 mt-2 text-sm">
                      This is the notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
        <div className="inline-flex">
        <Menu.Button className="inline-flex ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className="sr-only">Open user menu</span>
            <div className='w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full bg-sky-500' style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNz7-lwxFGbwJYa_WwZmXYfDBY6u_iteARSNmCrkznQ&s")'}}>
              <span className="sr-only">Leo Messi</span>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 w-48 p-1 mt-2 origin-top-right bg-white rounded-sm shadow-md ring-1 ring-opacity-5 focus:outline-none">
            
              <Menu.Item>
                {({ active }) => (
                  <div className='block p-2 text-gray-700 rounded-md cursor-pointer focus:bg-gray-200 hover:bg-gray-200' onClick={()=>navigate('./profile')}>
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className='block p-2 text-gray-700 rounded-md cursor-pointer focus:bg-gray-200 hover:bg-gray-200' onClick={()=>navigate('./settings')}>
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className='block p-2 text-gray-700 rounded-md cursor-pointer focus:bg-gray-200 hover:bg-gray-200' onClick={()=>navigate('./logout')}>
                    Log Out
                  </div>
                )}
              </Menu.Item>
        
            </Menu.Items>
            </Transition>
      </Menu>
    </div>
    </div>
  );
}
