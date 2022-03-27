import './App.css';
import questions from './components/Questions';
import Shaker from "./components/shaker";
import EightBall from './components/EightBall';
import { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState("What?")
  const [shake, setShake] = useState(false);

  return (
    <div className="App">
      <select>{questions.map(question =><option key={question} value={question}>{question}</option>)}</select>
      <EightBall shake={shake} answer={answer}/>
      <Shaker setShake={setShake} setAnswer={setAnswer}/>
    </div>
  );
}

export default App;
