import React, { useState, useEffect } from 'react';

function Horloge() {
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('horloge');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="horloge__container h-screen bg-black w-screen flex flex-col items-center justify-center">
      
      <div className="horloge__navbar mt-10 flex flex-row justify-center">
        <ul className="flex flex-row gap-6 text-3xl bg-gray-300 w-[620px] h-[70px] justify-evenly items-center rounded-3xl shadow-2xl">
          <li
            className={`px-8 py-2 hover__menu__item ${activeTab === 'horloge' ? 'hover__menu__item__active' : ''}`}
            onClick={() => setActiveTab('horloge')}
          >
            <a href="#" className="font-medium">
              Horloge
            </a>
          </li>
          <li
            className={`px-8 py-2 hover__menu__item ${activeTab === 'stopwatch' ? 'hover__menu__item__active' : ''}`}
            onClick={() => setActiveTab('stopwatch')}
          >
            <a href="#" className="font-medium">
              Stopwatch
            </a>
          </li>
          <li
            className={`px-8 py-2 hover__menu__item ${activeTab === 'timer' ? 'hover__menu__item__active' : ''}`}
            onClick={() => setActiveTab('timer')}
          >
            <a href="#" className="font-medium">
              Timer
            </a>
          </li>
        </ul>
      </div>

        <div className="grid grid-cols-3 gap-12 items-center justify-center h-screen">
            <div className="horloge__hours horloge_ds p-4 rounded-3xl w-[450px]">
                <h1 className="absolute text-3xl">
                    {hours < 12  ? 'AM' : 'PM'}
                </h1>
                {/* {(hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0')} */}
                {hours.toString().padStart(2, '0')}
            </div>
            <div className="horloge__minutes horloge_ds p-4 rounded-3xl w-[450px]">
                {minutes.toString().padStart(2, '0')}
            </div>
            <div className="horloge__seconds horloge_ds p-4 rounded-3xl w-[450px]">
                <div className=''>
                    {seconds.toString().padStart(2, '0')}
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Horloge;
