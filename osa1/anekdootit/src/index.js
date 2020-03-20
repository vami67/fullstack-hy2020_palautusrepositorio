import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

    const vote = () => {
        //Muista, että tilan oikeaoppinen päivittäminen edellyttää olion tai taulukon kopioimista.!!
        const copy = [...points]
        copy[selected] += 1
        console.log("Tilan taulukon kopio johon on tehty muutos ",copy )
        setPoints(copy)
    }

    console.log("Tilassa oleva taulukko NYT ",points )

    const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{props.anecdotes[selected]}</p>
            <p>has {points[selected]} votes</p>
            <p><Button handleClick={vote} text='vote' /></p>
            <p><Button handleClick={randomAnecdote} text='next anecdote' /></p>

            <h2>Anecdote with most votes</h2>
            {Math.max(...points)}
            <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p>
        </div>
    )
}



const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)