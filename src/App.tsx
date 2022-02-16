import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Step2 } from "./components/step2";
import { Step1 } from "./components/step1";

const GlobalCss = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 40px;
  gap: 40px;

  section {
    border: solid #a1fdfd 1px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .timer{
    border-color: #5c5c5c;
    border-width: 1px;
    border-style: solid solid dashed;
    padding: 8px 48px;
    margin-bottom: 24px;
    border-radius: 8px;
  }
`;


function App() {

  return (
    <GlobalCss>
        <Step1/>
        <Step2/>
    </GlobalCss>
  );
}

export default App;
