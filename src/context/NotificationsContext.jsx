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
  // const [notifications, setNotifications] = useState([noti1, noti2]);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    if (!notification) return;
    setNotifications((prev) => ([...prev, {...notification, id: crypto.randomUUID()}]));
  };

  const reset = () => {
    setNotifications([]);
  }

  const pop = () => {
    setNotifications((prev) => prev.slice(0, prev.length-1))
  } 

  const value = {
    notifications,
    addNotification,
    reset,
    pop
  }

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  )
}


export const useNotifications = () => useContext(NotificationsContext);