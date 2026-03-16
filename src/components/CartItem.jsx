import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {updateQuantity,removeItem} from "../redux/CartSlice";
import {Link} from "react-router-dom";

const CartItem = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.cartItems);

  const total = cartItems.reduce(
    (sum,item)=>sum+item.price*item.quantity,0
  );

  const increase=(item)=>{
    dispatch(updateQuantity({
      id:item.id,
      quantity:item.quantity+1
    }));
  };

  const decrease=(item)=>{
    if(item.quantity>1){
      dispatch(updateQuantity({
        id:item.id,
        quantity:item.quantity-1
      }));
    }else{
      dispatch(removeItem(item.id));
    }
  };

  return(
    <div>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products">Plants</Link> | 
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h2>Shopping Cart</h2>

      {cartItems.map(item=>(
        <div key={item.id}>

          <img src={item.image} alt={item.name} width="100"/>

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={()=>increase(item)}>+</button>

          {item.quantity}

          <button onClick={()=>decrease(item)}>-</button>

          <button onClick={()=>dispatch(removeItem(item.id))}>
            Delete
          </button>

        </div>
      ))}

      <h3>Total Amount: ${total}</h3>

      <button onClick={()=>alert("Checkout coming soon!")}>
        Checkout
      </button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

    </div>
  );
};

export default CartItem;