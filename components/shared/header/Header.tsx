import React from 'react';
import Categories from './Categories';
import Logo from './Logo';
import Login from './Login';

const Header = () => {
  return (
    <div className='flex items-center justify-between '>
      <Categories />
      <Logo />
      <Login />
    </div>
  );
}

export default Header;
