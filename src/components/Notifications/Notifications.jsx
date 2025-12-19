import { useEffect, useState } from 'react'
import { useNotifications } from '../../context/NotificationsContext';

const Notifications = () => {
  const { notifications, addNotification, reset } = useNotifications();

  

  return (
    <>
      {notifications && <p className='absolute px-5 py-2 bg-blackish-100 text-yellowish-100'>{notifications.message}</p>}
    </>
  )
}

export default Notifications;