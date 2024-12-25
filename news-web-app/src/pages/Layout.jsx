import React, {useState} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css'


const Layout = () =>{
  const [isActive, setIsActive] = useState(false);
  const toggleNav = () => {
    setIsActive(prevState => !prevState);// for toggle
  }

    return (
    <>
      <nav className={`fixed top-0 z-50 lg:px-10 bg-gray-950 w-full text-white `}>
        <ul className=' flex item-center  md:flex-row flex-col'>
          <li className='p-1 text-blue-400 p-4 text-lg font-bold  mr-5'>
            <NavLink to="/" style={{border: "none"}} className={({ isActive }) => (isActive ? 'active-link' : '')}>NewsWindow</NavLink>
          </li>
          <div className={`${isActive ? 'active' : ''} bg-blue-900  top-16 flex item-center w-full p-3 sm:w-96 lg:relative z-50 lg:bg-transparent lg:top-0 absolute lg:flex-row flex-col py-3`}>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={ ({ isActive }) => (isActive ? 'active-link' : '')} to="/">Home</NavLink> </li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/developer">Developer</NavLink></li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/bussiness">Bussiness</NavLink></li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/entertainment">Entertainment</NavLink></li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/general">General</NavLink></li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/health">Health</NavLink></li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/science">Science</NavLink></li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/sports">Sports</NavLink></li>
          <li className='p-2  hover:bg-sky-500 text-sm font-light'> <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/technology">Technology</NavLink></li>
          </div>
          <li 
            onClick={toggleNav}
            className={`lg:hidden absolute cursor-pointer right-8 rotate-90 text-xl bg-zinc-800 rounded-md p-3 py-4 hover:bg-blue-800 `}
          >
            |||
            {/* <span> | </span><span> | </span><span> | </span> */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
    );
  // }
}

export default Layout;
