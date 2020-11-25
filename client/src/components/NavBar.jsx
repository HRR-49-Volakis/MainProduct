import React from 'react';
import Logo from './Logo.jsx';
import ProductsRoomsDeals from './ProductsRoomsDeals.jsx';
import Menu from './Menu.jsx';
import SearchBar from './SearchBar.jsx';
import UserIcons from './UserIcons.jsx';

var NavBar = function(props) {
  return (
    <div className='header'>
      <div className='menuContainer'>
        <Menu />
      </div>
      <div id='navBarContainer' className='navBarContainer'>
        <Logo />
        <ProductsRoomsDeals />
        <SearchBar />
        <UserIcons />
      </div>
    </div>
  );
};

export default NavBar;