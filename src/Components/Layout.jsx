import React, { useState } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Header from "./Header";
const Layout = () => {
  
  const [cartItem, setCartItem] = useState([])

  const [myStyle, setMyStyle] = useState({ backgroundColor: "red" });
  return (
    <div className=" container min-vh-100">
      <Header style={setMyStyle} />
      <div className="container d-flex flex-column ">
        <div className="row ">
          <Products cartItem={cartItem} cartItems={setCartItem} style={myStyle} />
          <Cart cartItem={cartItem}  style={myStyle} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
