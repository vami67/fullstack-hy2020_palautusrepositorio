import React from 'react'
import Person from './Person'

const Persons = ({ persons, removePerson }) => {
  return (
    <ul>
      {persons.map((person) =>
        <Person
          key={person.id}
          person={person}
          removePerson={removePerson}
        />
      )}
    </ul>
  )
}

export default Persons