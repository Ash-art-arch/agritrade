import React from 'react';
import bg from "../assets/bg.svg";
import { useCart, useCartDispatch } from '../providers/cartProvider';

interface CartItem {
    imgSrc: string;
    title: string;
    price: number;
    category: string;
}

const CartPage = () => {
    const data = useCart();
    const dispatch = useCartDispatch();
    const cart: CartItem[] = data.cart;

    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full flex gap-9'>
                <div className='w-full md:w-2/3 h-[30rem] p-9 overflow-scroll overflow-x-hidden'>
                    <h1 className='text-3xl text-[#444]'>Shopping Cart</h1>
                    {cart.map((item: CartItem, index: number) => (
                        <div key={index} className='border shadow-xl mt-8 w-full p-3 justify-between bg-transparent flex rounded-xl items-center border-[#eee]'>
                            <div className='flex items-center'>
                                <div className='w-[10rem] md:w-[15rem] aspect-square bg-center bg-cover bg-norepeat rounded-xl' style={{ backgroundImage: `url(${item.imgSrc})` }}></div>
                                <hr className='mx-4' />
                                <div className='ml-2 md:ml-8 text-xl'>{item.title}</div>
                            </div>
                            <div className='mr-2 md:mr-8'>
                                Rs {item.price}
                            </div>
                            <div>
                                <button className='bg-red-500 text-white p-2 rounded-lg' onClick={() => dispatch({ type: 'REMOVE_FROM_CART', index: index })}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='p-8 md:w-1/3 h-[35rem] flex flex-col'>
                    <h1 className='text-2xl'>Summary</h1>
                    <div className='mt-8 w-full h-2/3 bg-transparent shadow-lg rounded-xl border-[#eee] border flex flex-col p-8'>
                        <div className='flex justify-between items-center m-4'>
                            <h5 className='text-xl font-bold capitalize'>Total price:</h5>
                            <p className='text-xl'>Rs {data.total}</p>
                        </div>
                        <div className='flex justify-between items-center m-4'>
                            <h5 className='text-xl font-bold capitalize'>Shipping price:</h5>
                            <p className='text-xl'>Free</p>
                        </div>
                        <div className='mt-[6rem]'>
                            <hr />
                            <div className='flex justify-between items-center m-4'>
                                <h5 className='text-xl font-bold capitalize'>Grand Total:</h5>
                                <p className='text-xl'>Rs {data.total}</p>
                            </div>
                        </div>
                    </div>
                    <button className='mt-10 bg-[#FFB800] text-white p-4 rounded-lg w-full'> Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
