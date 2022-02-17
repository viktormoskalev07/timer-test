import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss'


export const Step6: React.FC = () => {
    const [start, setStart] = useState(false);
    const [step, setStep] = useState('1');
    const [intervalState, setIntervalState] = useState('1000');
    const [startFrom, setStartFrom] = useState(180);
    const counterRef = useRef<number>(Number(startFrom));
    const [counter, setCounter] = useState(Number(startFrom));
    const [decrement, setDecrement] = useState(-1);
    const [timeValidation, setTimeValidation] = useState(true);
    const [typeTime, setTypeTime] = useState(true);
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
    const minutesHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const v = event.target.value.split(':');
        const mm = Number(v[v.length - 2]) || 0;
        const ss = Number(v[v.length - 1]) || 0;

        if (/[^0-9:]/.test(event.target.value)) {
            setTimeValidation(false);
            return;
        }
        if (mm > 0 && ss > 60) {
            setTimeValidation(false);
            return
        }
        if (mm > 0) {
            setTypeTime(true)

        } else {
            setTypeTime(false)
        }
        setStartFrom((mm * 60) + ss)
        setTimeValidation(true)
    }
    const timeAdopter = (time: number) => {
        if (typeTime) {

            let ss: string | number = time % 60;

            let mm: string | number = Math.floor(time / 60);
            mm = mm < 10 ? "0" + mm : mm;
            ss = ss < 10 ? "0" + ss : ss;
            return mm + ":" + ss

        } else {
            return time
        }

    }
    return <section className={styles.step2}>
        <h1> step 6</h1>
        <div className="card-container">
            <div className={'card'}>
                <div className="timer">
                    {timeAdopter(counter)}
                </div>

                card
            </div>
            <div className={'card'}>
                <div className="timer">
                    {timeAdopter(counter)}
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
            <label> <span> x step (s)      </span>
                <input onChange={inputHandler(setStep)} value={step} type="text"/>
            </label>
            <label> <span> y interval (ms)     </span>
                <input onChange={inputHandler(setIntervalState)} value={intervalState} type="text"/>
            </label>
            <label> <span style={{color: 'green'}}> z start   mm:ss     </span>
                <input style={{backgroundColor: timeValidation ? "" : 'red'}} onChange={minutesHandler}
                       placeholder={'3:00'} type="text"/>
            </label>
            <span> you can also type just number without ':' like 123312</span>

            <button style={{color: 'green'}} className={'button'} onClick={resetHandler}> reset to new Z</button>
        </div>


    </section>

}