import React from 'react';
import Logo from './Logo.jsx';
import ProductsRoomsDeals from './ProductsRoomsDeals.jsx';
import Menu from './Menu.jsx';
import SearchBar from './SearchBar.jsx';

var NavBar = function(props) {
  return (
    <div className='header'>
      <div className='menuContainer'>
        <Menu />
      </div>
      <div className='navBarContainer'>
        <Logo />
        <ProductsRoomsDeals />
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;