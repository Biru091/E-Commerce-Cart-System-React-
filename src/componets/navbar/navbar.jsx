import {Link} from "react-router-dom"
import { useState,useEffect } from "react";
const Navbar=()=>{
    const [data,setData]=useState([])
    useEffect(() => {
      const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setData(cart);
    };

    updateCart();

}, []);
    return(
        <>
        <div className="navbar">
           <nav>
            <div className="color">
            <h2>
            <span style={{ color: "#ff6969" }}>E</span>
            <span style={{ color: "#ababff" }}>S</span>
            <span style={{ color: "#f9fafc" }}>H</span>
            <span style={{ color: "#ffac15" }}>O</span>
             <span style={{ color: "#ff13ff" }}>P</span>
            </h2>
           </div>
           <div className="abc">
             <Link to ='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
              
          </div>

          
           </nav>

        </div>
        
        </>
    )

}
export default Navbar;