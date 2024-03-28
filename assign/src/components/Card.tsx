import React, { useEffect, useRef, useState } from 'react'
import { useCart,useCartDispatch } from '../providers/cartProvider';
type Props = {
  title: string,
  price: number,
  imgSrc: string
}
const Card = (props:Props) => {
  const [size,setSize]=useState("");
  const priceRef = useRef<HTMLSelectElement>(null);
const data=useCart();
const dispatch=useCartDispatch()
  const finalPrice:number = size ? props.price * parseInt(size) : props.price
  const handleCLick = () => {
    window.location.href = `/products?title=${props.title}&price=${finalPrice}`
  }
  useEffect(()=>{
    if(priceRef.current){

      setSize(priceRef.current.value)
    }
  },[])
  const handleAddtoCart=()=>{
    dispatch({type:'ADD_TO_CART',payload:{title:props.title,price:finalPrice,imgSrc:props.imgSrc,category:props.title}})
    console.log(data)
  }

  return (
    <div className='w-[70%] h-[300px] bg-[#1F311C] shadow-2xl rounded-xl flex flex-col' >
      <div className='w-full h-[60%] rounded-t-xl bg-cover bg-center bg-no-repeat ' onClick={handleCLick} style={{ backgroundImage: `url(${props.imgSrc})`}}></div>
      <div className='flex justify-between items-center'>
        <p className='text-white mt-4 px-4 text-xl'onClick={handleCLick} >{props.title}</p>
        <p className='text-white mt-4 pr-4  text-xl'>₹ {finalPrice}</p>
      </div>
      <div className='flex justify-center items-center mt-4 gap-10'>
        <select name="" id="" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className='bg-[#FFB800] text-white p-2 rounded-lg mb-3 cursor-pointer'  onClick={handleAddtoCart}>Add To Cart</button>
      </div>
    </div>

  )
}

export default Card