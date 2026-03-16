import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {addItem} from "../redux/CartSlice";
import {Link} from "react-router-dom";

const plants = {
  Indoor:[
    {id:1,name:"Fiddle Leaf Fig",price:25,image:"/images/fiddle.jpg"},
    {id:2,name:"Snake Plant",price:15,image:"/images/snake.jpg"}
  ],

  Outdoor:[
    {id:3,name:"Rose",price:10,image:"/images/rose.jpg"},
    {id:4,name:"Cactus",price:8,image:"/images/cactus.jpg"}
  ],

  Succulents:[
    {id:5,name:"Aloe Vera",price:12,image:"/images/aloe.jpg"},
    {id:6,name:"Bonsai",price:40,image:"/images/bonsai.jpg"}
  ]
};

const ProductList = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart.cartItems);

  return(
    <div>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products">Plants</Link> | 
        <Link to="/cart">🛒 Cart ({cartItems.length})</Link>
      </nav>

      <h1>Our Plants</h1>

      {Object.keys(plants).map(category=>(
        <div key={category}>
          <h2>{category}</h2>

          <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>

          {plants[category].map(plant=>{

            const added = cartItems.find(i=>i.id===plant.id);

            return(
              <div key={plant.id} style={{border:"1px solid gray",padding:"10px"}}>

                <img src={plant.image} alt={plant.name} width="120"/>

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  onClick={()=>dispatch(addItem(plant))}
                  disabled={added}
                >
                  {added ? "Added" : "Add to Cart"}
                </button>

              </div>
            );

          })}

          </div>

        </div>
      ))}

    </div>
  );
};

export default ProductList;