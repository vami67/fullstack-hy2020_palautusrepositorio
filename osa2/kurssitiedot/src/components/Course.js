import React from 'react'

const Header = (props) => {
    return (<h1>{props.course}</h1>)
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    return props.parts.map(
        part =>
            <Part key={part.id} part={part.name} exercises={part.exercises} />)
}

const Total = (props) => {

    const total = props.parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (<p>total of exercises {total} </p>)
}

const Course = (props) => {
    return (<div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
    </div>)
}

export default Course