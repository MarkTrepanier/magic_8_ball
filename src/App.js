import './App.css';
import Shaker from "./components/shaker"

function App() {
  return (
    <div className="App">
      <img src={require("./images/magic8ball.jpg")} alt="8-ball"/>
      <Shaker/>
    </div>
  );
}

export default App;