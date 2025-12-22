import { createContext, useContext, useEffect, useState } from 'react';
import { formateDate, isCharacterPresent } from '../utils/helpers';
// import { usePlayer } from './PlayerContext';

const STORAGE_KEY = "systems-playerground.characters";
const isValidCharacter = (character) =>
  character &&
  character.name?.trim() &&
  character.avatar &&
  character.favThing?.trim();

export const CharactersContext = createContext();


export const CharactersProvider = ({ children }) => {
  // const { setCurrentPlayer } = usePlayer();
  const [characters, setCharacters] = useState(() => {
    try {
      const characters = localStorage.getItem(STORAGE_KEY);
      return characters ? JSON.parse(characters) : [];
    } catch {
      return [];
    }
  });


  const addCharacter = (character, setCurrentPlayer) => {
    console.log(character);

    if (!isValidCharacter(character)) return { success: false, message: "Some fields are empty" };

    const characterObj = {
      ...character,
      hp: 100, 
      level: 1, 
      cash: 1200, 
      dateCreated: formateDate(), 
      id: crypto.randomUUID()
    }

    setCharacters((prev) => {
      if (prev.some((c) => c.id === character.id)) return prev;
      return [...prev, characterObj];
    })

    setCurrentPlayer(characterObj);
    return { success: true, message: `Character Created!` };
  };

  const removeCharacter = (characterId, name) => {

    if (!isCharacterPresent(characters, characterId)) return { success: false, message: `${name} was not found!`, type: "character" }

    setCharacters((prev) => prev.filter((character) => character.id !== characterId));
    return { success: true, message: `${name} has been removed`, type: "character" };
  };

  const updateCharacter = (id, update) => { };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
  }, [characters]);

  const value = {
    characters,
    addCharacter,
    removeCharacter,
    updateCharacter,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharacters = () => useContext(CharactersContext);