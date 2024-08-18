import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [discount, setDiscount] = useState(null);
  const navigate = useNavigate();

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalPrice = () => {
    const subtotal = getSubtotal();
    let discountAmount = 0;

    if (discount) {
      if (discount.type === 'fixed') {
        discountAmount = discount.amount;
      } else if (discount.type === 'percentage') {
        discountAmount = subtotal * (discount.amount / 100);
      }
    }

    return subtotal - discountAmount;
  };

  const applyDiscount = (type, value) => {
    setDiscount({ type, amount: value });
  };

  const handleProceedToPayment = () => {
    navigate('/Payment');
  };

  const subtotal = getSubtotal();

  let applicableDiscount = null;
  if (subtotal > 250) {
    applicableDiscount = { type: 'percentage', amount: 20, label: '20% off (Cart value is more than $250)' };
  } else if (subtotal > 200) {
    applicableDiscount = { type: 'percentage', amount: 15, label: '15% off (Cart value is more than $200)' };
  } else if (subtotal > 150) {
    applicableDiscount = { type: 'fixed', amount: 20, label: '$20 off (Cart value is more than $150)' };
  } else if (subtotal > 100) {
    applicableDiscount = { type: 'percentage', amount: 10, label: '10% off (Cart value is more than $100)' };
  }

  return (
    <>
      <div className="cart">
        {cart.map(item => {
          const originalPrice = item.price * item.quantity;
          let discountedPrice = originalPrice;

          if (discount) {
            if (discount.type === 'fixed') {
              discountedPrice = originalPrice - discount.amount / cart.length;
            } else if (discount.type === 'percentage') {
              discountedPrice = originalPrice * (1 - discount.amount / 100);
            }
          }

          return (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              discountedPrice={discountedPrice}
            />
          );
        })}
      </div>

      <div className="discount-section">
        <h3>Apply Discounts</h3>
        {applicableDiscount && (
          <button
            onClick={() => applyDiscount(applicableDiscount.type, applicableDiscount.amount)}
          >
            {applicableDiscount.label}
          </button>
        )}
      </div>

      <div className="total-section">
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
        <button onClick={handleProceedToPayment} className="proceed-to-payment-button">
          Proceed to Payment
        </button>
      </div>
    </>
  );
};

export default Cart;