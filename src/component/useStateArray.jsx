import React, { useState } from 'react'
import { data } from '../data/data'


const UseStateArray = () => {

  const [person, setPerson] = useState(data)
  const [newName, setNewName] = useState('')
  const handleRemove = (id) => {
    console.log('hello id',id)
    let newPerson = person.filter(people => people.id !== id)
    setPerson(newPerson)

  }

  const handleChange = (e) => {
    e.preventDefault()
    if (newName !== '') {
      const add = {

        id: person.length + 1,
        name: newName

      };
      person.push(add);
      setNewName(' ');
    }
  };
  return (
    <div>
      {
        person.map((people) => {
          return (
            <div key={people.id}>
              <h4>{people.name}</h4>
              <button onClick={() => handleRemove(people.id)}>Remove</button>
            </div>
          )
        })
      }
      <form>
        <input type='text' placeholder='enter name' value={newName} onChange={(e) => setNewName(e.target.value)} />

        <button onClick={handleChange}>Add</button><br />
      
       

      </form>
      <button onClick={() => setPerson([])}>clear all</button>
    </div>
  )
}

export default UseStateArray

