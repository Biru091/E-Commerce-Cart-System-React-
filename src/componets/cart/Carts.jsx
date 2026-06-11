import { useState, useEffect } from "react";

const Cartdata = () => {
  const [cart, setCart] = useState([]);
  const [addedcartnum, setaddedcartnum] = useState([]);

  const handelremove = (item) => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    const update = data.filter((p) => p.id !== item.id);

    localStorage.setItem("cart", JSON.stringify(update));
    setCart(update);

    const delnum = JSON.parse(localStorage.getItem("addedItems")) || [];

    const update1 = delnum.filter((p) => p !== item.id);

    setaddedcartnum(update1);
    localStorage.setItem("addedItems", JSON.stringify(update1));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);

    const added = JSON.parse(localStorage.getItem("addedItems")) || [];
    setaddedcartnum(added);
  }, []);

  return (
    <div className="cartitems">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <h3>${item.price}</h3>
            <h3>{item.category}</h3>

            <button>Buy Now</button>

            <button onClick={() => handelremove(item)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No Product</p>
      )}
    </div>
  );
};

export default Cartdata;