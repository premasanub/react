import React from 'react';
import { PiShoppingCart } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = ({cartCount}) => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
           <Link to="/">
            <div className="text-2xl font-bold">MyStore</div>
            </Link>
            <Link to="/cart" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
                
                <PiShoppingCart size={24} />
                
                cart( {cartCount}) </Link>
        </nav>
    );
};


export default Navbar;