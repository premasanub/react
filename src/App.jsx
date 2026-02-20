import React,{  useState } from "react";

import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
//import ProductDetail from "./Pages/ProductDetail";
import Checkout from "./Pages/Checkout";
const App = () => {

 const [cart,setCart]=useState([]);


  const addToCart=(product)=>{
    const exist=cart.find(item=>item.id===product.id);
    if(exist){
      setCart(cart.map(item=>
        item.id===product.id ? {...item,quantity: item.quantity+1} : item
      ));
    }
    else{
      setCart([...cart, {...product,quantity:1}]);
    }
   };
  
   //setCart([...cart,product]);

   const removeFromCart = (id)=>{
    setCart(cart.filter(item=>item.id!==id));
  };

  

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar  cartCount={cart.length}/>
        </div>
        <Routes>
         <Route path="/"  element={<Home addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}  removeFromCart={removeFromCart}  />}/>
          {/* <Route path="/Product/:id" element={<ProductDetail/>}  /> */}
          <Route path="/Checkout" element={<Checkout />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
