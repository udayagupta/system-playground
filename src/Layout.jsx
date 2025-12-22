import { Link, Outlet } from 'react-router-dom';
import Notifications from './components/Notifications/Notifications';

const Layout = () => {

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#f5c26b" : "#2b2b2b",
    textDecoration: isActive ? "underline" : "none",
    scale: 1.1
  });

  return (
    <div className='bg-blackish-100 text-yellowish-100 relative'>
      <Notifications />
      <header className='sticky top-0  flex terraria justify-between items-center p-5 bg-yellowish-100 text-blackish-100'>
        <Link to={"/"}><h1 className='text-3xl tracking-wider'>Systems Playground</h1></Link>
        <nav className='text-xl'>
          <ul className='flex gap-5 tracking-wider'>
            <Link><li>Playground</li></Link>
            <Link><li>All Saves</li></Link>
            <Link><li>Inventory</li></Link>
            <Link><li>Enemy Bestiary</li></Link>
            <Link><li>Journal</li></Link>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="mt-10 border-t border-yellowish-100 bg-blackish-100 text-yellowish-100">
      </footer>

    </div>
  )
}

export default Layout