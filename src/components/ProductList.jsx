import FiddleLeaf from '../assets/fiddle-leaf-fig.jpg';
import SnakePlant from '../assets/snake-plant.jpg';
import Rose from '../assets/rose.jpg';
import AloeVera from '../assets/aloe-vera.jpg';
import Bonsai from '../assets/bonsai.jpg';
import Cactus from '../assets/cactus.jpg';


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';


const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 25, category: 'Indoor', image: FiddleLeaf },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', image: SnakePlant },
  { id: 3, name: 'Rose', price: 10, category: 'Outdoor', image: Rose },
  { id: 4, name: 'Aloe Vera', price: 12, category: 'Indoor', image: AloeVera },
  { id: 5, name: 'Bonsai', price: 40, category: 'Indoor', image: Bonsai },
  { id: 6, name: 'Cactus', price: 8, category: 'Outdoor', image: Cactus },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAdd = product => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Plants</Link> |{' '}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h2>Our Plants</h2>
      <div className="plants-container">
        {products.map(product => (
          <div key={product.id} className="plant-card">
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAdd(product)} disabled={cartItems.find(i => i.id === product.id)}>
              {cartItems.find(i => i.id === product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;