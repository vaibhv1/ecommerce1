import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart, updateQuantity, discountedPrice }) => {
  return (
    <div className="cart-item">
        <img src={item.image} alt={item.title} />
      <h4>{item.name}</h4>
      <div className="quantity-section">
        <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span className="quantity-value">{item.quantity}</span>
        <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <div className="price-section">
        {discountedPrice < item.price * item.quantity ? (
          <>
            <span className="original-price">${(item.price * item.quantity).toFixed(2)}</span>
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
          </>
        ) : (
          <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
        )}
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;