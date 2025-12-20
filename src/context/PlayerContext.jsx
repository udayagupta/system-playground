import { createContext, useState, useContext } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);

  const setCurrentPlayer = (player) => {
    if (!player) return;
    setPlayer(player);
  }

  const value = {
    player,
    setCurrentPlayer
  }

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  )
};


export const usePlayer = () => useContext(PlayerContext);