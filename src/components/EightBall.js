import Styled, {keyframes} from 'styled-components';
import img from "../images/magic8ball.jpg"

function EightBall(props) {

//     const animate = () => {
//         props.setShake(true);
//         console.log(`clicked shake: ${props.shake}`)

//         setTimeout(() => { props.setShake(false) }, 5000);
//         console.log(`timeout complete, shake: ${props.shake
// }`)
//     }

    return (
        <div className={props.shake ? "shake"  : "8ball"}>
            <EightBallStyle src={require("../images/magic8ball.jpg")} alt="8-ball" className={props.shake ? `shake` : null}>
                <p>{props.answer}</p>
            </EightBallStyle>
        </div>
    );
}

export default EightBall;


const moveGradient = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const EightBallStyle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  width: 50vw;
  height: 33vh;
  background-size: cover;
  background-image: url(${img});
  background-repeat: no-repeat;

  animation: ${moveGradient} 1s ease-out infinite;


  p{
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    color: white;
  }
`
