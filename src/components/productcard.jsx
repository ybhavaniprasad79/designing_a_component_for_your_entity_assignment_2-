// write product card here
import React from "react";
import ViewProductButton from "./button"; 

const Productcard = () => {
 
  const productImage = "https://beebom.com/wp-content/uploads/2023/09/Untitled_design_-_2023-09-06T170523_deblurred.jpg"; 
  const productName = "Infinity Stones";
  const pricesysmbol="$"
  const productPrice = "∞"; 

  return (
    <div className="border rounded-xl p-6 shadow-lg max-w-xs text-center bg-white hover:shadow-2xl transition duration-300">
      <img 
        src={productImage} 
        alt={productName} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold text-gray-700">{productName}</h2>
      <div className="flex items-center justify-center gap-1 mb-4">      
      <p className="text-2xl font-extrabold text-black mb-4">{pricesysmbol}</p>
      <p className="text-3xl font-extrabold text-gray-500 mb-4">{productPrice}</p> 
  
      </div>
    
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
