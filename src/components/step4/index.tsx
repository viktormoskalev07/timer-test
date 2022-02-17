import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss'


export const Step4: React.FC = () => {
    const [start, setStart] = useState(false);
    const [step, setStep] = useState('1');
    const [intervalState, setIntervalState] = useState('1000');
    const [startFrom, setStartFrom] = useState('100');
    const counterRef = useRef<number>(Number(startFrom));
    const [counter, setCounter] = useState(Number(startFrom));
    counterRef.current = counter;


    //ref for using clearTimeout in  functions
    const timerRef = useRef<ReturnType<typeof setInterval> | undefined>();
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCounter(counterRef.current + Number(step))
        }, Number(intervalState))
        return () => timerRef.current && clearInterval(timerRef.current)
    }, [])


    const startToggle = () => {
        setStart(!start)
        if (!start && timerRef.current) {
            clearInterval(timerRef.current)
        }
        if (start && timerRef.current) {
            timerRef.current = setInterval(() => {
                setCounter(counterRef.current + Number(step))
            }, Number(intervalState))
        }
    }
    const resetHandler = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            setStart(true);
            setCounter(Number(startFrom));
        }
    }

    const inputHandler = (setState: React.Dispatch<React.SetStateAction<string>>) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {

            const v = event.target.value;

            if (Number(v) >= 0) {
                setState(event.target.value)
            }

        }
    }

    return <section className={styles.step2}>
        <h1> step 4</h1>
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
        <div className="label-box">
            <label> <span> x increment      </span>
                <input onChange={inputHandler(setStep)} value={step} type="text"/>
            </label>
            <label> <span> y interval (ms)     </span>
                <input onChange={inputHandler(setIntervalState)} value={intervalState} type="text"/>
            </label>
            <label> <span> z start from      </span>
                <input onChange={inputHandler(setStartFrom)} value={startFrom} type="text"/>
            </label>

            <button className={'button'} onClick={resetHandler}> reset to new Z</button>
        </div>


    </section>

}