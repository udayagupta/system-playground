import { MdDelete } from "react-icons/md";


const SaveLi = ({ character }) => {
  return (
    <li className='hover:bg-yellowish-100 hover:text-blackish-100 transition cursor-pointer border rounded-md p-3 flex gap-5 bg-blackish-100 text-yellowish-100 text-xl'>
      <div className='flex flex-col'>
        <img src={`./sprites/avatars/${character.avatar}.png`} className=' rounded-sm border h-28 w-full bg-blackish-100' alt="" style={{ imageRendering: "pixelated" }} />
      </div>
      <div className='flex justify-between w-full'>
        <div>
          <p>🎮 Name: {character.name}</p>
          <p>🎯 Level: {character.level}</p>
          <p>🗓️ Date: {character.dateCreated}</p>
          <p>🎁 Fav. Thing: {character.favThing}</p>
        </div>
        <div onClick={() => removeCharacter(character.id)} title='Delete' className='flex justify-center items-center'>
          <MdDelete className='my-auto text-3xl' />
        </div>
      </div>
    </li>
  )
}

export default SaveLi