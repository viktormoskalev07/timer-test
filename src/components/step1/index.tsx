import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";

const Wrap=styled.div`
width: 220px;
  margin:0 auto;
text-align: center;
 
`


const TimerButton = styled.button`
  padding: 4px 24px;
  border-radius: 24px;
 margin: 0 5px;
`


export const Step1: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [timerActive, setTimerActive] = useState<boolean>(true);

    const resetTimer = () => {
        setTimerActive(false);
        setTime(0);
        setTimerActive(true);
    }

    useEffect(() => {
        const increaseInterval = setInterval(() => {
            if (timerActive) setTime(state => state + 1)
        }, 1000);

        return () => clearInterval(increaseInterval);
    }, [timerActive]);
    return <section>

        <Wrap>
            <h2>Step 1</h2>
            <div className={'timer'}>
                {time}
            </div>
            <TimerButton onClick={() => setTimerActive(!timerActive)}>{timerActive ? 'Stop' : 'Start'}</TimerButton>
            <TimerButton onClick={resetTimer}>Reset</TimerButton>

        </Wrap>
    </section>

}