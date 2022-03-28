import Styled from 'styled-components';
import img from "../images/8-ball-back-small.png"

function EightBall(props) {

    return (
        <div className={props.shake ? "shake" : "8ball"}>
            <EightBallStyle >
                <p>{props.answer}</p>
            </EightBallStyle>
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
