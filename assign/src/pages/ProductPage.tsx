import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
// @ts-expect-error ignore
import { allProducts } from '../products';
import { useCart,useCartDispatch } from '../providers/cartProvider';
// Define type for Product if needed
interface Product {
  title: string;
  price: number;
  imgSrc: string;
  category: string;
  summary: string;
}

const products: Product[] = allProducts;

const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title') || '';
  const price = queryParams.get('price') || '';
  const dispatch = useCartDispatch()
  // Filter products based on title and price
  const data = useCart()
  const filterProduct = products.filter((product) => product.title === title);

  // Check if filterProduct array is not empty before accessing its elements
  const product = filterProduct.length > 0 ? filterProduct[0] : null;
  const handleAddtoCart=()=>{
    dispatch({type:'ADD_TO_CART',payload:{title,price,imgSrc:product?.imgSrc,category:product?.category}})
    console.log(data)
  }
  return (
    <div>
      <Navbar />
      <div className='flex gap-10 justify-evenly w-screen bg-[#121C11] items-center p-20 h-screen'>
        <div className='w-[40%] h-[20rem] flex flex-col'>
          <h1 className='text-5xl text-white uppercase font-bold'>{title}</h1>
          <p className='mt-10 text-white text-2xl'>
            {product ? product.summary : ''}
          </p>
          <div className='flex justify-between items-center'>
            <button className='bg-[#FFB800] text-white p-2 rounded-lg w-[12rem] mt-20' onClick={handleAddtoCart}>Add to cart</button>
            <p className='text-white mt-20 px-4 text-2xl'>Total Price : Rs {price}</p>
          </div>
        </div>
        <div
          className='w-[50%]  h-[35rem] bg-cover object-fill  bg-center bg-no-repeat rounded-xl ml-10'
          style={{
            backgroundImage: `url(${product?.imgSrc})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductPage;
