import { createContext, useState, useEffect, useContext } from 'react'

const NotificationsContext = createContext();

const noti1 = {
  type: "error",
  message: "error notification",
  origin: "NotificationsContext"
}

const noti2 = {
  type: "form",
  message: "fields are empty",
  origin: "CreateCharacter"
}



export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([noti1, noti2]);

  const addNotification = (notification) => {
    if (!notification) return;
    setNotifications((prev) => ([...prev, notification]));
  };

  const reset = () => {
    setNotifications([]);
  }

  const value = {
    notifications,
    addNotification,
    reset,
  }

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  )
}


export const useNotifications = () => useContext(NotificationsContext);