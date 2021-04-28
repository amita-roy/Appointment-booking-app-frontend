import Cart from 'container/Cart';
import React from 'react';

const CartPage = () => (
  <div className="border-2" style={{ minHeight: 'calc(100vh - 608px)' }}>
    <h1>Cart</h1>
    <Cart />
  </div>
);

export default CartPage;
