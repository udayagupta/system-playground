import { createContext, useContext, useEffect, useState } from 'react';
import { formateDate } from '../utils/helpers';
import { useNotifications } from './NotificationsContext';

const STORAGE_KEY = "systems-playerground.characters";
const isValidCharacter = (character) =>
  character &&
  character.id &&
  character.name?.trim() &&
  character.avatar &&
  character.favThing?.trim();

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState(() => {
    try {
      const characters = localStorage.getItem(STORAGE_KEY);
      return characters ? JSON.parse(characters) : [];
    } catch {
      return [];
    }
  });
  

  const addCharacter = (character) => {
    if (!isValidCharacter(character)) return { success: false, message: "Some fields are empty" };

    setCharacters((prev) => {
      if (prev.some((c) => c.id === character.id)) return prev;
      return [...prev, { ...character, hp: 100, level: 1, cash: 1200, dateCreated: formateDate() }];
    })

    return { success: true, message: `Character Created!` }
  };

  const removeCharacter = (characterId) => {

    setCharacters((prev) => prev.filter((character) => character.id !== characterId));
    return { success: true, message: `${characterId} has been removed`, type: "character" };
  };

  const updateCharacter = (id, update) => { };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    console.log(characters);
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