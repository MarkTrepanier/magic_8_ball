import './App.css';
import questions from './components/Questions';
import Shaker from "./components/shaker";

function App() {
  return (
    <div className="App">
      <select>{questions.map(question =><option value={question}>{question}</option>)}</select>
      <img src={require("./images/magic8ball.jpg")} alt="8-ball"/>
      <Shaker/>
    </div>
  );
}

export default App;