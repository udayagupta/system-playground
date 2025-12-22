import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import { getRandomGreeting } from "../../utils/helpers";
import { scaleAnimations } from "../../utils/animations";

const AvatarSelector = ({ avatar, navigateAvatar, showGreeting }) => {
  return (
    <div className="max-w-max flex flex-col gap-2">
      <div className="avatar-image-placeholder relative max-w-max">
        <img src="./sprites/tiles/avatar_placeholder.png" alt="" style={{ imageRendering: "pixelated" }} className="h-60 min-w-40" />
        <motion.img key={avatar} variants={scaleAnimations} initial="initial" animate="animate" transition="transition" src={`./sprites/avatars/${avatar}.png`} alt="" style={{ imageRendering: "pixelated" }} className="h-40 absolute bottom-1 left-1/2 -translate-x-1/2" />
        {showGreeting && (
          <motion.p key={Math.random()} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: "backInOut" }} className="greeting-box">
            {getRandomGreeting(avatar)}
          </motion.p>
        )}

      </div>
      <div className="flex justify-center gap-2">
        <button onClick={() => navigateAvatar("previous")} className="arrow-btn"><FaArrowLeft className="inline" /></button>
        <button onClick={() => navigateAvatar("next")} className="arrow-btn"><FaArrowRight className="inline " /></button>
      </div>
    </div>
  )
}

export default AvatarSelector