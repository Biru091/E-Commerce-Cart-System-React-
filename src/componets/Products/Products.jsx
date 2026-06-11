import { useState, useEffect } from "react";
import cartItems from "../../data/products";

const Product = () => {
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("addedItems")) || [];
    setAddedItems(saved);
  }, []);

  const handleCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart.find((p) => p.id === item.id)) {
      const updatedCart = [...cart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      
    }
   if (!addedItems.find((p)=>p.id==item.id)){
    const updatedAdded = [...addedItems, item.id];
    setAddedItems(updatedAdded);
    localStorage.setItem("addedItems", JSON.stringify(updatedAdded));
   }
  };

  return (
    <div className="cartitems">
      {cartItems.map((item) => (
        <div key={item.id} className="item">
          <h2>{item.name}</h2>
          <h3>${item.price}</h3>
          <h3>{item.category}</h3>

          <button onClick={() => handleCart(item)}>
            {addedItems.includes(item.id)
              ? "Added to cart"
              : "Add to cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;