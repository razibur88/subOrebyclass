import React, { useEffect, useState } from 'react'
import { TfiReload } from "react-icons/tfi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Post = ({ allPage,subCatShow }) => {
    let [filter,setFilter]=useState([])

    useEffect(()=>{

        let filterdata = subCatShow.slice(0,5)
        setFilter(filterdata)
    },[subCatShow])


    let handleShowAllproduct=()=>{
        setFilter(subCatShow)
    }
    return (
        
        <div className="flex justify-between flex-wrap">
            {subCatShow.length > 0 ? 
                <div>
                    <div className='flex flex-wrap'>
                    {filter.map((item) => (
                    <div className="w-[32%]">
                        <Link to={`/product/${item.id}`}>
                        <div className="relative group overflow-hidden">
                            <img src={item.thumbnail} className='w-full lg:h-[270px]' alt="" />
    
                            <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                <div className="">
                                    <div className="flex items-center justify-end mr-2 py-2">
                                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                                        <FaHeart />
                                    </div>
                                    <div className="flex items-center justify-end mr-2 py-2 ">
                                        <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Compare</h3>
                                        <TfiReload />
                                    </div>
                                    <div className="flex items-center justify-end mr-2 py-2">
                                        <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                                        <FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="flex justify-between items-center  py-5">
                            <div className="">
                                <p className='text-[16px] text-[#262626] font-dm font-bold'>{item.title}</p>
                            </div>
                            <div className="">
                                <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${item.price}</h3>
                            </div>
                        </div>
                </Link>
          
                    </div>
                ))}
                </div>
                {subCatShow.length > 5 &&
                      <button onClick={handleShowAllproduct}>All Product</button>
                }
                </div>
            : 
                allPage.map((item) => (
                    <div className="w-[32%]">
                        <Link to={`/product/${item.id}`}>
                        <div className="relative group overflow-hidden">
                            <img src={item.thumbnail} className='w-full lg:h-[270px]' alt="" />
    
                            <div className=" absolute left-0 bottom-[-150px]  w-full bg-[#fff] h-[150px] duration-500 ease-in-out flex items-center justify-end group-hover:bottom-0" >
                                <div className="">
                                    <div className="flex items-center justify-end mr-2 py-2">
                                        <h3 className='mr-2 text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Wish List</h3>
                                        <FaHeart />
                                    </div>
                                    <div className="flex items-center justify-end mr-2 py-2 ">
                                        <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Compare</h3>
                                        <TfiReload />
                                    </div>
                                    <div className="flex items-center justify-end mr-2 py-2">
                                        <h3 className='mr-[10px] text-[16px] text-[#767676] font-normal font-dm hover:text-[#262626] hover:font-bold duration-500 ease-in-out'>Add to Cart</h3>
                                        <FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="flex justify-between items-center  py-5">
                            <div className="">
                                <p className='text-[16px] text-[#262626] font-dm font-bold'>{item.title}</p>
                            </div>
                            <div className="">
                                <h3 className='text-[16px] text-[#262626] font-dm font-bold'>${item.price}</h3>
                            </div>
                        </div>
                </Link>
                    </div>
                ))
            }


           
        </div>
        
    )
}

export default Post