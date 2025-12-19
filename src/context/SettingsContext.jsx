import { createContext, useContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    font: "Terraria", // minecraft, stardew valley, terraria
    fontSize: "medium", // large, small, medium
    theme: "dark",
  })

  const value = {
    settings,
    setSettings
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext);