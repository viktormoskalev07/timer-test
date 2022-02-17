import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss'


export const Step5: React.FC = () => {
    const [start, setStart] = useState(false);
    const [step, setStep] = useState('1');
    const [intervalState, setIntervalState] = useState('1000');
    const [startFrom, setStartFrom] = useState('100');
    const counterRef = useRef<number>(Number(startFrom));
    const [counter, setCounter] = useState(Number(startFrom));
    const [decrement, setDecrement] = useState(-1);

    counterRef.current = counter;

    //ref for using clearTimeout in  functions
    const timerRef = useRef<ReturnType<typeof setInterval> | undefined>();
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCounter(counterRef.current + (Number(step) * decrement))
        }, Number(intervalState))
        return () => timerRef.current && clearInterval(timerRef.current)
    }, [])


    const startToggle = () => {
        setStart(!start)
        if (!start && timerRef.current) {
            clearInterval(timerRef.current)
        }
        if (start && timerRef.current) {
            !counter && setCounter(Number(startFrom));
            timerRef.current = setInterval(() => {
                setCounter(counterRef.current + (Number(step) * decrement))
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
    if (counter < 0 && counterRef.current) {
        resetHandler()
        setCounter(0);

    }

    const inputHandler = (setState: React.Dispatch<React.SetStateAction<string>>) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {

            const v = event.target.value;

            if (Number(v) >= 0) {
                setState(event.target.value)
            }

        }
    }
    const switchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        resetHandler()

        setDecrement(event.target.checked ? 1 : -1)

    }

    return <section className={styles.step2}>
        <h1> step 5</h1>
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

        <div className="switch-box">
            <span className={'text'}> decrement</span>
            <label className="switch">
                <input onChange={switchHandler} type="checkbox"/>
                <span className="slider round">  </span>

            </label>
            <span className={'text'}> increment</span>
        </div>

        <div className="label-box">
            <label> <span> x step      </span>
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