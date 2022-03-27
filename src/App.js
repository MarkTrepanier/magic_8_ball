import './App.css';
import questions from './components/Questions';
import Shaker from "./components/shaker";
import EightBall from './components/EightBall';
import { useState } from 'react';

function App() {
  let [answer, setAnswer] = useState("hello")
  const [shake, setShake] = useState(false);

  return (
    <div className="App">
      <select>{questions.map(question =><option key={question} value={question}>{question}</option>)}</select>
      <EightBall shake={shake} setShake={setShake} answer={answer}/>
      <Shaker setShake={setShake} setAnswer={setAnswer}/>
    </div>
  );
}

export default App;
