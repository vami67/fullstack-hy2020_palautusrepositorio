import React from 'react'

const PersonDetails = ({ person }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <div>capital {person.capital}</div>
      <div>population {person.population}</div>
      <h3>languages</h3>
      <ul>
        {person.languages.map((language) =>
          <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={person.flag} alt={person.name} width="500" height="600" />
    </div>
  )
}

export default PersonDetails