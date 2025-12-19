import React, { useRef, useState } from 'react'
import { useCharacters } from '../../context/CharactersContext'
import { motion } from 'motion/react';
import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import SaveLi from './SaveLi';


const ChooseCharacter = () => {
  const { characters, addCharacter, removeCharacter } = useCharacters();
  const [toggleForm, setToggleForm] = useState(false);
  const ref = useRef(null);

  const handleToggle = () => {
    setToggleForm((prev) => !prev);
  };

  const confirm = (character) => {
    const result = addCharacter(character);
    addNotification(result);
    setToggleForm(false);
  }

  return (
    <div ref={ref} className='bg-blackish-100 relative min-h-screen'>
      {toggleForm && <CreateCharacter confirm={confirm}/>}
      <h2 className='text-3xl text-center text-yellowish-100 pt-3'>Your Saves</h2>

      <ul className='flex flex-col gap-4 px-4 py-2'>
        <li onClick={handleToggle} className='hover:bg-yellowish-100 hover:text-blackish-100 transition cursor-pointer border p-3 rounded-md flex flex-col justify-center items-center gap-2 bg-blackish-100 text-yellowish-100 text-xl'>
          <CiCirclePlus className='h-15 w-15' />
          <p>Create a new character</p>
        </li>
        {
          characters.map((character) => (
            <SaveLi key={character.id} character={character} />
          ))
        }
      </ul>
    </div>
  )
}

export default ChooseCharacter