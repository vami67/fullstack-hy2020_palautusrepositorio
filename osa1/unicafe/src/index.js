import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({good,neutral,bad}) => {
    return (
        <>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}</p>
            <p>positive {((good * 1) / (good + neutral + bad)) * 100} %</p>
        </>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)