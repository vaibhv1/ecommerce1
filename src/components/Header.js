import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="header">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <h1>Shoopee</h1>
        <div className="nav-right">
          <i class="fa fa-shopping-cart"></i>
          <Link to="/cart" className="nav-link cart-link">
            Cart ({cartItemCount})
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;