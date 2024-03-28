import React from 'react';
import Card from "../components/Card";
import { allProducts } from '../products';

interface Product {
    title: string;
    price: number;
    imgSrc: string;
}

const MarketPlace: React.FC = () => {
    const products: Product[] = allProducts;

    return (
        <div className='flex z-10 flex-col items-center p-8 bg-[#121C11] overflow-hidden'>
            <h1 className='text-5xl text-white w-full text-center' style={{ fontFamily: 'Hurricane' }}>MarketPlace</h1>
            <div className='mt-10 bg-[#182616] rounded-lg flex justify-evenly items-center text-white h-20 w-full max-w-screen-xl'>
                <p className="text-2xl px-4 py-2">All</p>
                <p className="text-2xl px-4 py-2">Seeds</p>
                <p className="text-2xl px-4 py-2">Crops</p>
                <p className="text-2xl px-4 py-2">Fertilizers</p>
            </div>
            <div className='p-10 gap-8 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-xl'>
                {products.map((product, index) => (
                    <Card key={index} title={product.title} price={product.price} imgSrc={product.imgSrc} />
                ))}
            </div>
        </div>
    );
};

export default MarketPlace;
