import { useEffect, useState } from "react";
import { useSettings } from "./context/SettingsContext";
import Notifications from "./components/Notifications/Notifications";
import ChooseCharacter from "./components/ChooseCharacter/ChooseCharacter";
import Playground from "./components/Playground/Playground";
import MenuScreen from "./components/MenuScreen/MenuScreen";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import { useCharacters } from "./context/CharactersContext";

function App() {
  const { settings } = useSettings();
  const [gameMode, setGameMode] = useState("menu-screen"); // [ "menu-screen", "playground", "saves", "create-character" ]
  const { addCharacter } = useCharacters();

  const style = {
    fontFamily: `${settings.font}`
    // fontSize: ``
  }



  return (
   <main style={style} className="relative  border-pink-950">
      <Notifications />
      {gameMode === "menu-screen" && <MenuScreen setGameMode={setGameMode}/>}
      {/* {gameMode === "create-character" && <CreateCharacter close={close} confirmCharacter={confirmCharacter} />} */}
      {gameMode === "saves" && <ChooseCharacter />}
   </main>
  )
}

export default App
