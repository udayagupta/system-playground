import { MdDelete } from "react-icons/md";
import { usePlayer } from "../../context/PlayerContext";

const SaveLi = ({ character, removeCharacter }) => {
  const { setCurrentPlayer } = usePlayer();

  const handleClick = (character) => {
    setCurrentPlayer(character);
  }

  return (
    <li className='hover:bg-yellowish-100 hover:text-blackish-100 transition cursor-pointer border rounded-md p-3 flex gap-5 bg-blackish-100 text-yellowish-100 text-xl'>
      <div role="button" onClick={() => handleClick(character)} className="flex w-full gap-5">
        <div className='flex flex-col'>
          <img src={`./sprites/avatars/${character.avatar}.png`} className=' rounded-sm border h-28 w-full bg-blackish-100' alt="" style={{ imageRendering: "pixelated" }} />
          {/* <ProgressBar max={200} current={130} barColor={"#b4202a"} barShadowColor={"#73172d"}/> */}
        </div>
        <div className='flex justify-between w-full'>
          <div className="cursor-text">
            <p>🎮 Name: {character.name}</p>
            <p>🎯 Level: {character.level}</p>
            <p>🗓️ Date: {character.dateCreated.formattedDate}</p>
            <p>🎁 Fav. Thing: {character.favThing}</p>
          </div>
        </div>
      </div>
      <div role="button" onClick={() => removeCharacter(character.id, character.name)} title='Delete' className='border px-2 rounded-md hover:bg-blackish-100 hover:text-yellowish-100 flex justify-center items-center'>
        <MdDelete className='my-auto text-3xl' />
      </div>
    </li>
  )
}

export default SaveLi