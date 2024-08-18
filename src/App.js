import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Payment from './pages/Payment'; 
import TitleManager from './components/TitleManager';


function App() {
  return (
    <CartProvider>
      <Header />
      <TitleManager defaultTitle="Shopping Application" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </CartProvider>
  );
}

export default App;