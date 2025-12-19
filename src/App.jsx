import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import { useEffect, useState } from "react";
import { useSettings } from "./context/SettingsContext";

function App() {
  const { settings } = useSettings();

  const style = {
    fontFamily: `${settings.font}`
    // fontSize: ``
  }

  return (
   <main style={style} className="relative">
      <CreateCharacter />
   </main>
  )
}

export default App
