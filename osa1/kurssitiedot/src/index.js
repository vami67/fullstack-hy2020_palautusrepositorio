import React from 'react'
import ReactDOM from 'react-dom'

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
      <Part part={part.name}
        exercises={part.exercises} />)
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (<p>Number of exercises {total} </p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <>
      <Header
        course={course.name} />

      <Content
        parts={course.parts} />

      <Total
        parts={course.parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))