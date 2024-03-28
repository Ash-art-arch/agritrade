import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import CartPage from '../pages/CartPage';
import Modal from '../Modal';

const Navbar: React.FC = () => {
  const navigate:NavigateFunction= useNavigate();
  const [cartview,setCartView] = useState(false);
  const handleCartClick =()=>{
   setCartView(true)
  }
  const handleLoginClick =()=>{
    navigate("/login")
  }
  return (
    <div className='bg-[#547751] h-20 flex items-center p-4 pl-8 sticky top-0 w-full z-50 text-white justify-between'>
      <div>
        <h1 className='text-3xl'>Agri<span className='text-[#FFB800]'>Trade</span></h1>
      </div>
      <div className='hidden md:flex justify-between w-1/3 '>
        <a href="/" className='mx-4'>Home</a>
        <a href="/" className='mx-4'>MarketPlace</a>
        <a href="/" className='mx-4'>Services</a>
      </div>
      <div className='flex  mr-4 justify-between gap-4'>
        <button className='bg-transparent border text-[#FFB800] hover:bg-[#FFB800] hover:text-white border-[#FFB800] p-2 rounded-lg' onClick={handleLoginClick}>Login</button>
        <button className='bg-transparent border text-[#FFB800] hover:bg-[#FFB800] hover:text-white border-[#FFB800] p-2 rounded-lg' onClick={handleCartClick}>My Cart</button>
      </div>
      {cartview?<Modal onClose={()=>setCartView(false)}><CartPage/></Modal>:null}
    </div>
  );
};

export default Navbar;
