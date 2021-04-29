import Cart from 'container/Cart';
import React from 'react';

const CartPage = () => (
  <div
    className="bg-primary bg-opacity-20"
    style={{ minHeight: 'calc(100vh - 608px)' }}
  >
    <Cart />
  </div>
);

export default CartPage;
