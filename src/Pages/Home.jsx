import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCart from "../Components/ProductCart";


const Home = ({addToCart,cart,removeFromCart}) => {

   const[products,setProducts]= useState([]);


    useEffect(()=>{
  fetchData();
  },[]);

    
  const fetchData=async()=>{
    try{
      const response=await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response.data);
    }catch(error){
      console.log("Error fetching data:",error);
    }
  };
    
    return (
          <div className='container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map((ele)=>(
               <ProductCart key={ele.id} ele={ele} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart}/>
               
            ))}
        </div>
    );
};

export default Home;