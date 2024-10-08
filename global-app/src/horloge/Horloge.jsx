import React, { useState, useEffect } from 'react';

function Horloge() {
  const [time, setTime] = useState(new Date());

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
    <div className="horloge__container h-screen w-screen bg-black m-3">
      <div className="flex flex-row items-center justify-center h-screen gap-20">
        <div className="horloge__hours horloge_ds ww-[500px] p-4">
            <h1 className='absolute text-xl'>AM</h1>
            {(hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0')}
        </div>
        <div className="horloge__minutes horloge_ds w-[500px] p-4">
            {minutes.toString().padStart(2, '0')}
        </div>
        <div className="horloge__seconds horloge_ds w-[500px] p-4">
            {seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

export default Horloge;
