import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center transform hover:scale-105 transition duration-300">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl text-green-600">✓</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Order Placed Successfully!
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Thank you for shopping with us.  
          Your items will be delivered soon 🚚
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-medium transition"
          >
            View Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;