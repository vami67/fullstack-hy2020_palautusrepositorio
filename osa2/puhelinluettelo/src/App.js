import React, { useState, useEffect } from 'react'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(searchName.toLowerCase()))

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const showNotification = (message) => {
    setMessage(
      message
    )
    setTimeout(() => {
      setMessage(null)
    }, 2000)
  }

  const showError = (message) => {
    setErrorMessage(
      message
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    let existsPerson = persons.find((person) => person.name === personObject.name)

    if (existsPerson) {
      if (window.confirm(`${existsPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(existsPerson.id, personObject)
          .then(
            returnedPerson => {
              setPersons(persons.map(person => person.id !== existsPerson.id ? person : returnedPerson))
              showNotification(`${returnedPerson.name} updated`)
            }
          )
          .catch(error => {
            showError(`the note '${existsPerson.name}' was already deleted from server`)
          })
      }
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          showNotification(`${returnedPerson.name} added`)
        })
        .catch(error => {
          console.log(error.response.data)
          showError(`${error.response.data.error}`)
        })

    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = person => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(n => n.id !== person.id))
          showNotification(`${person.name} deleted`)
        }
        )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Error message={errorMessage} />
      <Filter
        handleSearchNameChange={handleSearchNameChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={personsToShow}
        removePerson={removePerson}
      />
    </div>
  )

}

export default App