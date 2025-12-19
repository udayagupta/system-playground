import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import { useEffect, useState } from "react";
import { useSettings } from "./context/SettingsContext";
import Notifications from "./components/Notifications/Notifications";
import ChooseCharacter from "./components/ChooseCharacter/ChooseCharacter";

function App() {
  const { settings } = useSettings();

  const style = {
    fontFamily: `${settings.font}`
    // fontSize: ``
  }

  return (
   <main style={style} className="relative border- border-pink-950">
      {/* <CreateCharacter /> */}
      <Notifications />
      <ChooseCharacter />
   </main>
  )
}

export default App
