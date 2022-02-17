import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss'
import {Card} from "./components/card";

interface Counter {
    inc: number,
    dec: number
}

export const Step7: React.FC = () => {
    const [start, setStart] = useState(false);
    const [step, setStep] = useState('1');
    const [intervalState, setIntervalState] = useState('1000');
    const [startFrom, setStartFrom] = useState(180);
    const counterRef = useRef<Counter>({inc: Number(startFrom), dec: Number(startFrom)});
    const [counter, setCounter] = useState({inc: Number(startFrom), dec: Number(startFrom)});

    const [timeValidation, setTimeValidation] = useState(true);

    counterRef.current = counter;

    //ref for using clearTimeout in  functions
    const timerRef = useRef<ReturnType<typeof setInterval> | undefined>();
    useEffect(() => {
        timerRef.current = setInterval(() => {
            const newState = {
                inc: counterRef.current.inc + Number(step),
                dec: counterRef.current.dec - Number(step)
            }

            setCounter({...newState})
        }, Number(intervalState))
        return () => timerRef.current && clearInterval(timerRef.current)
    }, [])


    const startToggle = () => {
        setStart(!start)
        if (!start && timerRef.current) {
            clearInterval(timerRef.current)
        }
        if (start && timerRef.current) {
            !counter.dec && setCounter({...counter, dec: Number(startFrom)});
            timerRef.current = setInterval(() => {
                const newState = {
                    inc: counterRef.current.inc + Number(step),
                    dec: counterRef.current.dec - Number(step)
                }
                setCounter({...newState})
            }, Number(intervalState))
        }
    }
    const resetHandler = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            setStart(true);
            setCounter({inc: Number(startFrom), dec: Number(startFrom)});
        }
    }
    if (counter.dec < 0 && counterRef.current) {
        timerRef.current && clearInterval(timerRef.current);
        setStart(true);
        setCounter({...counter, dec: 0});

    }

    const inputHandler = (setState: React.Dispatch<React.SetStateAction<string>>) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {

            const v = event.target.value;

            if (Number(v) >= 0) {
                setState(event.target.value)
            }

        }
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
        setStartFrom((mm * 60) + ss)
        setTimeValidation(true)
    }
    const timeAdopter = (time: number) => {
        let ss: string | number = time % 60;

        let mm: string | number = Math.floor(time / 60);
        mm = mm < 10 ? "0" + mm : mm;
        ss = ss < 10 ? "0" + ss : ss;
        return mm + ":" + ss

    }
    return <section className={styles.step2}>
        <h1> step 7</h1>
        <div className="card-container">
            <Card t={timeAdopter(counter.dec)}/>
            <Card t={timeAdopter(counter.inc)}/>
            <Card t={counter.inc}/>
            <Card t={counter.dec}/>

        </div>

        <div className="button-container">
            <button onClick={startToggle} className={'button'}> {start ? 'start' : 'stop'} </button>
            <button onClick={resetHandler} className={'button'}> reset</button>
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

