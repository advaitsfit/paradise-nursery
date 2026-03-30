import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Plants</Link> |{' '}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h2>Shopping Cart</h2>

      <div className="cart-container">

{cartItems.map(item => (

  <div key={item.id} className="cart-card">

    <img src={item.image} alt={item.name} />

    <div className="cart-info">

      <h3>{item.name}</h3>

      <p>Unit Price: ${item.price}</p>

      <p>Total: ${item.price * item.quantity}</p>

      <div className="cart-buttons">

        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>

        <span>{item.quantity}</span>

        <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>

        <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>

      </div>

    </div>

  </div>

))}

</div>

      <h3>Total Amount: ${totalAmount}</h3>

      <div className="cart-footer">

        <button onClick={() => alert('Coming Soon')}>
          Checkout
        </button>

        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>

      </div>

    </div>
  );
};

export default CartItem;