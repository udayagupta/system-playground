import { useRef, useState } from 'react'
import { useCharacters } from '../../context/CharactersContext'
import { CiCirclePlus } from "react-icons/ci";
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import SaveLi from './SaveLi';
import { useNotifications } from '../../context/NotificationsContext';
import { usePlayer } from '../../context/PlayerContext';


const ChooseCharacter = () => {
  const { characters, addCharacter, removeCharacter } = useCharacters();
  const { setCurrentPlayer } = usePlayer();
  const { addNotification } = useNotifications();
  const [toggleForm, setToggleForm] = useState(false);
  const ref = useRef(null);

  const handleToggle = () => {
    setToggleForm((prev) => !prev);
  };

  const confirmCharacter = (character) => {
    const result = addCharacter(character, setCurrentPlayer);
    
    setToggleForm(false);
    addNotification(result);
  }

  const close = () => {
    setToggleForm(false);
  }

  return (
    <div ref={ref} className='mt-5 terraria min-h-screen'>
      {toggleForm && <CreateCharacter confirmCharacter={confirmCharacter} close={close} toggleForm={toggleForm} />}

      <ul className='flex flex-col gap-4 px-4 py-2'>
        <li onClick={handleToggle} className='hover:bg-yellowish-100 hover:text-blackish-100 transition cursor-pointer border p-3 rounded-md flex flex-col justify-center items-center gap-2 bg-blackish-100 text-yellowish-100 text-xl'>
          <CiCirclePlus className='h-15 w-15' />
          <p>Create a new character</p>
        </li>
        {!characters.length && <li className='rounded-md flex gap-5 bg-blackish-100 text-center text-yellowish-100 text-2xl'><p className='m-auto'>No saves, create a new one.</p></li>}
        {
          characters.map((character) => (
            <SaveLi key={character.id} character={character} removeCharacter={removeCharacter} />
          ))
        }
      </ul>
    </div>
  )
}

export default ChooseCharacter