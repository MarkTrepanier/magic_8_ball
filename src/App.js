import './App.css';
import questions from './components/Questions';
import Shaker from "./components/shaker";
import EightBall from './components/EightBall';
import { useState } from 'react';

function App() {
  let [answer, setAnswer] = useState("hello")
  const [shake, setShake] = useState(false);

  const animate = () => {
    setShake(true);
    console.log(`clicked shake: ${shake}`)

    setTimeout(() => {setShake(false)}, 5000);
    console.log(`timeout complete, shake: ${shake}`)
  }

  return (
    <div className="App">
      <select>{questions.map(question =><option key={question} value={question}>{question}</option>)}</select>
      <EightBall shake={shake} setShake={setShake} answer={answer}/>
      <Shaker animate={animate} setAnswer={setAnswer}/>
    </div>
  );
}

export default App;
