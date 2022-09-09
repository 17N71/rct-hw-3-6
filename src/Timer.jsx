import React, {useEffect, useState} from 'react';
import './style.css'
function Timer() {
    const [seconds,setSeconds] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [isStarted,setIsStarted] = useState(false)
    function startPause(){
        setIsStarted(!isStarted)
    }
    let timer;
    useEffect(()=>{
        isStarted?
       timer = setInterval(()=>{
           setSeconds(seconds + 1)
           if (seconds === 59){
               setSeconds(0)
               setMinutes(minutes + 1)
           }
       },1000):null
        return ()=>clearInterval(timer)
    })
    function stop(){
        setMinutes(0)
        setSeconds(0)
        setIsStarted(false)
        clearInterval(timer)

    }
    return (
        <div className={'timer'}>
            <button type="button" className={`${isStarted?"pause":"start"} start-pause`} onClick={startPause}>{isStarted?"Pause":"Start"}</button>
            <h1>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
            <button type="button" className="restart" disabled={isStarted?"":"auto"} onClick={stop}>Stop</button>
        </div>
    );
}

export default Timer;