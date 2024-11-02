import { useEffect, useState } from 'react';


export default function PrograssBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('INTERVAL');
            setRemainingTime(prevRemainingTime=> prevRemainingTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress value={remainingTime} max={timer}/>
    );
}