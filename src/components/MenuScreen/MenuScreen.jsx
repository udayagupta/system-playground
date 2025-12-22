import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCharacters } from '../../context/CharactersContext';
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import { useNotifications } from '../../context/NotificationsContext';
import { usePlayer } from '../../context/PlayerContext';

const MenuScreen = ({ setGameMode }) => {

  const [toggleForm, setToggleForm] = useState(false);
  const { addCharacter } = useCharacters();
  const { addNotification } = useNotifications();
  const { setCurrentPlayer } = usePlayer();

  const close = () => {
    setToggleForm(false);
  }

  const confirmCharacter = (character) => {
    const result = addCharacter(character, setCurrentPlayer);

    addNotification(result);
    setToggleForm(false);
  }

  return (
    <motion.div className='bg-slate-800  min-h-svh flex flex-col gap-10 items-center p-10'>
      {toggleForm && <CreateCharacter confirmCharacter={confirmCharacter} close={close} toggleForm={toggleForm} />}
        <img src="./sprites/UI/main_heading.png" alt="" style={{imageRendering: "pixelated"}} className='h-80'/>
        <div className='flex flex-col text-3xl text-white gap-5 text-'>
          <button className='menu-button' onClick={() => setToggleForm(true)}>Create New Character</button>
          <button className='menu-button'>Continue</button>
          <button onClick={() => setGameMode("saves")} className='menu-button'>Saves</button>
        </div>
    </motion.div>
  )
}

export default MenuScreen