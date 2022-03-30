import Styled from 'styled-components';
import img from "../images/8-ball-back-small.png"
import { useState } from 'react';

let answers = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
    "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
    "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
    "Yes.", "Yes definitely.", "You may rely on it."]
const questions = ['Will Eleven get her powers back?', 'Will Season 4 air this year?', 'Will Hopper be eaten by a demogorgon?', 'Will Dustin ever top Max in Dig Dug?'];


function EightBall(props) {
    const [answer, setAnswer] = useState("What?")
    const [shake, setShake] = useState(false);

    function shaker() {
        setShake(true)
        setAnswer(answers[Math.floor(Math.random() * answers.length)])
        setTimeout(() => setShake(false), 1000)
    }

    return (
        <div className={shake ? "shake" : "8ball"}>
            <select>{questions.map(question => <option key={question.indexOf()} value={question}>{question}</option>)}</select>
            <EightBallStyle >
                <p>{answer}</p>
            </EightBallStyle>
            <button onClick={() => {


                shaker()
            }}>
                shake!
            </button>
        </div>
    );
}

export default EightBall;

const EightBallStyle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  width: 100vw;
  height: 50vh;
  background-size: contain;
  background-image: url(${img});
  background-repeat: no-repeat;
  margin:10px;
  


  p{
    width: 50%;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    color: #d5d5d5;
  }
`
