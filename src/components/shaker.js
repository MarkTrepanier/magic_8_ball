import React from "react"

let answers = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
    "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
    "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
    "Yes.", "Yes definitely.", "You may rely on it."]

function shake() {
    return answers[Math.floor(Math.random() * answers.length)]
}
export default function Shaker(props) {

    return <button onClick={() => {
        props.setShake(true)
        props.setAnswer(shake())
        setTimeout(() => props.setShake(false), 1000);
    }}>
        shake!
    </button>
}