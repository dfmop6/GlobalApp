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
    <div className="horloge__container h-screen w-screen bg-black m-4 flex flex-col items-center justify-center">
      <div className="horloge__navbar mt-10 flex flex-row justify-center">
        <ul className="flex flex-row gap-6 text-3xl bg-gray-300 w-[620px] h-[70px] justify-evenly items-center rounded-3xl shadow-lg">
          {/* Horloge tab */}
          <li
            className={`px-8 py-2 hover__menu__item ${activeTab === 'horloge' ? 'hover__menu__item__active' : ''}`}
            onClick={() => setActiveTab('horloge')}
          >
            <a href="#" className="font-medium">
              Horloge
            </a>
          </li>

          {/* Stopwatch tab */}
          <li
            className={`px-8 py-2 hover__menu__item ${activeTab === 'stopwatch' ? 'hover__menu__item__active' : ''}`}
            onClick={() => setActiveTab('stopwatch')}
          >
            <a href="#" className="font-medium">
              Stopwatch
            </a>
          </li>

          {/* Timer tab */}
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

      <div className="flex flex-row items-center justify-center h-screen gap-20">
        <div className="horloge__hours horloge_ds w-[500px] p-4 rounded-3xl">
          <h1 className="absolute text-xl">AM</h1>
          {(hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0')}
        </div>
        <div className="horloge__minutes horloge_ds w-[500px] p-4 rounded-3xl">
          {minutes.toString().padStart(2, '0')}
        </div>
        <div className="horloge__seconds horloge_ds w-[500px] p-4 rounded-3xl">
          {seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

export default Horloge;
