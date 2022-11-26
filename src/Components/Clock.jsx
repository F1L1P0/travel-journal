import { useEffect, useState } from 'react';


export default function Clock() {
    const[clockState, setClockState] = useState();

    useEffect(()=>{
        setInterval(()=>{
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        },1000);}
    ,[])
    return(
        <h2 className="time">current time: {clockState}</h2>
    )
}