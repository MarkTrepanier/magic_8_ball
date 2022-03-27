import './App.css';
import questions from './components/Questions';
import Shaker from "./components/shaker";
import styledComponents from 'styled-components';
import img from "./images/magic8ball.jpg"

function App() {
  return (
    <div className="App">
      <select>{questions.map(question =><option value={question}>{question}</option>)}</select>
      <EightBall src={require("./images/magic8ball.jpg")} alt="8-ball">
        <p>text inside</p>
      </EightBall>
      <Shaker/>
    </div>
  );
}

export default App;

const EightBall = styledComponents.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  width: 50vw;
  height: 33vh;
  background-size: cover;
  background-image: url(${img});
  background-repeat: no-repeat;
  p{
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    color: white;
  }
`