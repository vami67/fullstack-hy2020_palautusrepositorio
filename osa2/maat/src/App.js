import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchName.toLowerCase())
  })

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      
      <Filter
        handleSearchNameChange={handleSearchNameChange}
      />

      <Persons
        persons={personsToShow}
      />

    </div>
  )

}

export default App