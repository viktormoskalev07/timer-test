import styled from '@emotion/styled';
import {Header} from "./components/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./routes";

const GlobalCss = styled.div`
  * {
    box-sizing: border-box;
  }

  section {
    height: 100%;
    overflow: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .timer {
    border-color: #5c5c5c;
    border-width: 1px;
    border-style: solid solid dashed;
    padding: 8px 48px;
    margin-bottom: 24px;
    border-radius: 8px;
  }

  .button {
    padding: 4px 24px;
    border-radius: 24px;
    cursor: pointer;
    margin: 0 5px;
  }

  .wrapper {

    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    position: absolute;
    left: 0;
    right: 0;
    min-height: 100vh;
    top: 0;
    overflow: auto;
  }

  .card {
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #fff;
    color: #424242;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

`;


function App() {

    return (
        <GlobalCss>
            <BrowserRouter>
                <Header/>
                <div className="wrapper">
                    <Routes>
                        {ROUTES.map(({link, Component}) => {
                            return <Route key={link} path={link} element={<Component/>}/>
                        })}

                    </Routes>

                </div>


            </BrowserRouter>
        </GlobalCss>
    );
}

export default App;
