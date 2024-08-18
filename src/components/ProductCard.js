import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Notification from './Notification';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
      <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
      <Notification message="Added to cart!" visible={notificationVisible} />
    </div>
  );
};

export default ProductCard;