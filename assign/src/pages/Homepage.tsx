import React from "react";

import  bg from "../assets/bg.svg"
import MarketPlace from "./MarketPlace";
const Homepage: React.FC = () => {

    return (
        <div className="w-full h-screen">
    
            <div className="absolute z-0  w-full h-screen bg-cover bg-center bg-no-repeat "  style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="w-[100vw] flex-col h-screen flex  items-center justify-center">
                <h1 className=" z-10 text-white text-7xl font-bold ">Welcome to AgriTrade</h1>
                <h3 className="z-10 mt-8 text-white text-3xl ">A one-stop destination for all your farm-related needs</h3>
                <button className="z-10 mt-8 bg-[#FFB800] text-white p-2 rounded-lg w-24 hover:bg-transparent hover:border-[#FFB800] hover:border hover:text-[#FFB800]">Login</button>
            </div> 
            <MarketPlace/>
        </div>
    )
}
export default Homepage