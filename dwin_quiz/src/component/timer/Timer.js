import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './Timer.scss';

export default function Timer({setShowScore}) {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(10)

    useEffect(() => {
        if (seconds === 0 && minutes === 0) {
            clearInterval(interval)
            setShowScore(true)
        } else {

           
            if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(59)

            }
            var interval = setInterval(() => {
                setSeconds(seconds - 1)

            }, 1000)
            return () => clearInterval(interval)
        }
    }, [seconds])

    return (
        <div className='timerBlock' style={minutes == 0 && seconds <= 15 ? {color:"red"}: {}}>
                Timer : {minutes}m {seconds}s
        </div>


    )
}
Timer.propTypes = {
    setShowScore:PropTypes.func
  };