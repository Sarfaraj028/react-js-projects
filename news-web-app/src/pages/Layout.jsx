import React, {Component} from 'react';
import { Outlet, Link } from 'react-router-dom';

export class Layout extends Component {
  render () {
    return (
    <>
      <nav className='px-10 p-4 bg-gray-950 w-full text-white'>
        <ul className='flex item-center'>
          <li className='p-1 ease-in-out duration-300 text-xl hover:scale-125 mr-10'>
            <Link to="/">NewsSuar</Link>
          </li>
          <li className='p-2 px-4 hover:bg-sky-500 '>
            <Link to="/">Home</Link>
          </li>
          <li className='p-2 px-4 hover:bg-sky-500 '>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
    );
  }
}

export default Layout;
