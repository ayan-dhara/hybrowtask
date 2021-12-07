import React, {useEffect, useState} from 'react';
import './timer.scss'

const Timer = ({remove}: any) => {
  const [time, setTime] = useState(5)
  useEffect(() => {
    if (time <= 0)
      remove()
    else
      setTimeout(() => setTime(time - 1), 1000)
  }, [time])
  return (
    <div className="timer-overlay">
      {time}
    </div>
  );
};

export default Timer;
