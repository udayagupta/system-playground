import { createContext, useState, useContext } from "react";
import { useCharacters } from "./CharactersContext";
import { isCharacterPresent } from "../utils/helpers";

const STORAGE_KEY = "systems-playground.activePlayer"
export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {

  const { characters } = useCharacters();

  const [player, setPlayer] = useState(() => {
  
    try {
      const activePlayer = localStorage.getItem(STORAGE_KEY);
      if (activePlayer) {
        const parsedCharacter = JSON.parse(activePlayer);
        const result = isCharacterPresent(characters, parsedCharacter.id);
        if (result) return activePlayer;
        return null;
      }
    } catch {
      return null;
    }
  });

  const setCurrentPlayer = (player) => {
    if (!player) return;
    setPlayer(player);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
  };

  const value = {
    player,
    setCurrentPlayer
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  )
};


export const usePlayer = () => useContext(PlayerContext);