import React from 'react'


export default function LeftBar() {
  return (
    <div className='bg-black h-screen w-[300px] text-white'>
        <div className='mx-auto pt-2 mb-4 flex flex-row justify-center items-center gap-36'>
            <div>
                <h1 class="logo__text text-3xl font-extrabold text-gray-900 dark:text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Is</span>sam.</h1>
                <div className='logo__line p-[2px] w-[35px] bg-white'></div>
            </div>
            <div>
                <i class="ri-menu-4-line text-3xl"></i>
            </div>
        </div>
        <div className='manu__navbar pl-4 h-[500px] flex flex-col items-center justify-center'>
            <ul className='flex flex-col gap-7 text-left w-[250px]'>
                <li className='btn1 flex flex-row gap-2'>
                    <i class="ri-calculator-line text-xl"></i>
                    <a className='text-xl font-bold' href="#">Calculator</a>
                </li>
                <li className='btn1 flex flex-row gap-2'>
                    <i class="ri-timer-flash-line text-xl"></i>
                    <a className='text-xl font-bold' href="#">Pomodoro</a>
                </li>
                <li className='btn1 flex flex-row gap-2'>
                    <i class="ri-24-hours-line text-xl"></i>
                    <a className='text-xl font-bold' href="#">Horloge</a>
                </li>
                <li className='btn1 flex flex-row gap-2'>
                    <i class="ri-football-line text-xl"></i>
                    <a className='text-xl font-bold' href="#">Foorball live</a>
                </li>
                <li className='btn1 flex flex-row gap-2'>
                    <i class="ri-ie-line text-xl"></i>
                    <a className='text-xl font-bold' href="#">InternetSpeed</a>
                </li>
            </ul>
        </div>
        <div className='absolute bottom-0 pb-5  pt-5 border-t text-center w-[300px]'> @Copyright, 2024</div>
    </div>
  )
}