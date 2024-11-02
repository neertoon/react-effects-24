import { useEffect, useState } from 'react';

const TIMER = 3000;

export default function DeleteConfirmation({onConfirm, onCancel}) {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('INTERVAL');
            setRemainingTime(prevRemainingTime=> prevRemainingTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);


    useEffect(() => {
        console.log('TIMER SET');
        const timer = setTimeout(() => {
            onConfirm();
        }, 3000);

        return () => {
            console.log('test');
            //jeśli komponent jest przegenerowywany to odpal to:
            clearTimeout(timer);
        }
    }, [onConfirm]);//wstawienie funkcji może spowodować pętlę wywołań bo funkcja != funkcja

    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">
                    No
                </button>
                <button onClick={onConfirm} className="button">
                    Yes
                </button>
            </div>
            <progress value={remainingTime} max={TIMER}/>
        </div>
    );
}
