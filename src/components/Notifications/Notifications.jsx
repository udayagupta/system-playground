import { useEffect, useState } from "react";
import { useNotifications } from "../../context/NotificationsContext";
import { motion } from "motion/react";
import { notificationsAnimations, scaleAnimations } from "../../utils/animations";


const Notifications = () => {
  const { notifications, pop } = useNotifications();

  useEffect(() => {
    if (!notifications.length) return;

    const timer = setTimeout(pop, 3000);
    return () => clearTimeout(timer);
    
  }, [notifications.length]);

  const NOTIFICATIONS_TEMPLATES = {
    error: {
      border: "2px solid red",
    },
    levelUp: {
      border: "2px solid green",

    },
    questAdded: {
      border: "2px solid "
    },
    expGained: {

    },
    charCreated: {

    }

  }

  if (notifications.length) {
    return (
      <ul>
        {notifications.map((n) => (
          <motion.li
            variants={scaleAnimations}
            initial="initial"
            animate="animate"
            transition="transition"
            key={Math.random()}
            className="fixed  tracking-wider z-9999 border  left-1/2 -translate-x-1/2 translate-y-1/4 px-5 py-2 text-2xl bg-blackish-100 text-yellowish-100 rounded-md"
          >
            {n.message}
          </motion.li>
        ))}
      </ul>
    )
  }
};

export default Notifications;
