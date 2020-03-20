import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
    if ((good + neutral + bad) > 0) {
        return (<>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={good + neutral + bad} />
                    <StatisticLine text="average" value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)} />
                    <StatisticLine text="positive" value={((good * 1) / (good + neutral + bad)) * 100 + ' %'} />
                </tbody>
            </table>
        </>)
    }
    return <p>No feedback given</p>
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