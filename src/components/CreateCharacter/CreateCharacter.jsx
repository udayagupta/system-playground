import { useEffect, useState } from "react";
import avatars from "../../data/Avatars.json";
import AvatarSelector from "./AvatarSelector";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
import { scaleAnimations } from "../../utils/animations";
const CreateCharacter = ({ confirmCharacter, close }) => {
  const [currentCharacter, setCurrentCharacter] = useState({
    name: "",
    avatar: "avatar_0001",
    favThing: "",
  });
  const [showGreeting, setShowGreeting] = useState(false);

  const updateValue = (field, value) => {
    setCurrentCharacter((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const navigateAvatar = (direction) => {
    const len = avatars.length;
    const currentAvatarIndex = parseInt(currentCharacter.avatar.split("_")[1]);
    if (direction === "next") {
      currentAvatarIndex === len ? updateValue("avatar", `avatar_0001`) : updateValue("avatar", `avatar_000${currentAvatarIndex + 1}`)
    } else {
      currentAvatarIndex === 1 ? updateValue("avatar", `avatar_000${len}`) : updateValue("avatar", `avatar_000${currentAvatarIndex - 1}`)
    }

  }

  useEffect(() => {
    if (!currentCharacter.avatar) return;
    setShowGreeting(true);

    const timer = setTimeout(() => {
      setShowGreeting(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentCharacter.avatar]);


  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 pointer-events-none z-40" />

      {/* Modal */}
      <motion.div
      variants={scaleAnimations}
      initial="initial"
      animate="animate"
      transition="transition"
        className="border-2 p-10   flex flex-col gap-5 rounded-lg justify-center
               fixed left-1/2 -translate-x-1/2 translate-y-1/4
               max-w-max items-center text-blackish-100 bg-yellowish-100
               border-blackish-100 z-50 pointer-events-auto"
      >
        <button onClick={close} className="fixed hover:bg-blackish-100 hover:text-yellowish-100 transition duration-200 top-5 right-5 p-2 rounded-md">
          <IoMdClose className="cursor-pointer  text-2xl"/>
        </button>
        <h2 className="text-2xl terraria tracking-wide text-center">
          Create Character
        </h2>

        <section className="flex gap-6">
          <AvatarSelector
            avatar={currentCharacter.avatar}
            navigateAvatar={navigateAvatar}
            showGreeting={showGreeting}
          />

          <div className="text-xl flex flex-col gap-3" spellCheck="false">
            <div className="input-box">
              <p>Name</p>
              <input type="text" value={currentCharacter.name} onChange={(e) => updateValue("name", e.target.value)} />
            </div>

            <div className="input-box">
              <p>Favourite <br /> Thing</p>
              <input type="text" value={currentCharacter.favThing} onChange={(e) => updateValue("favThing", e.target.value)} />
            </div>
          </div>
        </section>

        <section className="w-full bg-blackish-100 text-yellowish-100 text-xl rounded-md">
          <button onClick={() => confirmCharacter(currentCharacter)} className="w-full p-2 cursor-pointer">
            Confirm
          </button>
        </section>
      </motion.div>
    </>

  );
};

export default CreateCharacter;
