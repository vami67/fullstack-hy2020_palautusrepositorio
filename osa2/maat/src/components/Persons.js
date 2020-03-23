import React from 'react'
import Person from './Person'
import PersonDetails from './PersonDetails'

const Persons = ({ persons }) => {
  if (persons.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }

  if (persons.length < 10 && persons.length > 1) {
    console.log(persons.length)
    return (
      <ul>
        {persons.map((person) =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    )
  }

  return (
    <ul>
      {persons.map((person) =>
        <PersonDetails key={person.name} person={person} />
      )}
    </ul>
  )

}

export default Persons