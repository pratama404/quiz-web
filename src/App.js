/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import {useState} from "react";

import Navbar from "./components/Navbar.js";
import QuizScreen from "./components/QuizScreen.js";
import JoinScreen from "./components/JoinScreen.js";

function App() {
  const[isQuizStartted, setIsQuizStarted] = useState(false);
  return (
    <>
    <Navbar/>
    <div className="quiz-container">
      {
        isQuizStartted ? (
          <QuizScreen retry={()=>setIsQuizStarted(false)}/>
          ) : (
          <JoinScreen start={()=>setIsQuizStarted(true)}/>
          )
      }
    </div>
    </>

    );
}

export default App;
