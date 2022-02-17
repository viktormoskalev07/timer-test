import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss'


export const Step3: React.FC = () => {
    const [start, setStart] = useState(false);
    const [counter, setCounter] = useState(0);

    const counterRef = useRef<number>(0);
    counterRef.current = counter;


    //ref for using clearTimeout in  functions
    const timerRef = useRef<ReturnType<typeof setInterval> | undefined>();
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCounter(counterRef.current + 1)
        }, 1000)
        return () => timerRef.current && clearInterval(timerRef.current)
    }, [])


    const startToggle = () => {
        setStart(!start)
        if (!start && timerRef.current) {
            clearInterval(timerRef.current)
        }
        if (start && timerRef.current) {
            timerRef.current = setInterval(() => {
                setCounter(counterRef.current + 1)
            }, 1000)
        }
    }
    const resetHandler = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            setStart(true);
            setCounter(0);
        }
    }
    return <section className={styles.step2}>
        <h1> step 3</h1>
        <div className="card-container">
            <div className={'card'}>
                <div className="timer">
                    {counter}
                </div>

                card
            </div>
            <div className={'card'}>
                <div className="timer">
                    {counter}
                </div>

                card
            </div>
        </div>

        <div className="button-container">
            <button onClick={startToggle} className={'button'}> {start ? 'start' : 'stop'} </button>
            <button onClick={resetHandler} className={'button'}> reset</button>
        </div>

    </section>

}