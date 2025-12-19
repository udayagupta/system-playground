import React from 'react'
import { useCharacters } from '../../context/CharactersContext'

const ChooseCharacter = () => {
    const { characters, addCharacter } = useCharacters();
  return (
    <div>ChooseCharacter</div>
  )
}

export default ChooseCharacter