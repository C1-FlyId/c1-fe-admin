'use client';
import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';

export default function Aside(onClick) {
    return (
        
        <div className='fixed left-0 top-0 z-40 h-screen w-[321px] -translate-x-full font-poppins transition-transform sm:translate-x-0'>
            <div className='h-full items-center overflow-y-auto bg-blue-1 py-4  text-center dark:bg-gray-800'>
                <div className='mt-[34px] items-center  '>
                    <img className='w-[91px] h-[42px] ml-[116px] ' src={`./images/flyid_logo.svg`}  alt="FLY ID Logo" />
                    <span className='self-center whitespace-nowrap mt-[1.8px] text-[36px] font-bold text-neutral-1'>Admin C1</span>
                </div>
                <ul className='space-y-[26px] mt-[60px] ml-[36px] font-[18px] '>
                    <li >
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'34'} height={'34'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiHome className=' h-6 w-6' />
                                <span className='ml-[24px] '>
                                    Dashboard
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiSend className=' h-6 w-6' />
                                <span className='ml-[24px]'>
                                    Airlane
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiMap className=' h-6 w-6' />
                                <span className='ml-[24px] '>
                                    Airport
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiGlobe className=' h-6 w-6' />
                                <span className='cursor-pointer ml-[24px]'>
                                    Flight
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiFile className=' h-6 w-6' />
                                <span className='ml-[24px]'>
                                    Transaction
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiUsers className='h-6 w-6' />
                                <span className='ml-[24px]'>
                                    User
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
