import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Characters } from './components/Characters'

function App() {

const [characters, setCharacters] = useState()

useEffect(() => {
const URL = 'https://thronesapi.com/api/v2/Characters'
axios.get(URL)
.then(res => setCharacters(res.data))
.catch(err => console.log(err))
 
}, [])

console.log(characters)

 

  return (
    <div className="App">
       <h1 className='title__principal'>Game of Throne</h1>
    <div className='card__container'>
    {

        characters?.map(character => (
        <Characters
        key={`${character.firstName}-${character.title}`}
        character = {character} />

))

}

    </div>
      

    </div>
  )
}

export default App
