import React from 'react'
import { Product } from '@/type/Types'

  const ProductCard: React.FC<Product> = (props)=>{

    const {
        id,
        name,
        description,
        price,
        imgUrl,
        stock,
        feature,
        dimension,
        material,
        category_name,
      } = props;
      
  return (
    <>
    <div className="w-40 md:w-48 bg-white shadow-md rounded-xl duration-500 md:hover:scale-105 ">
        <a href="#">
            <img src={imgUrl ?? ""} alt="Product" className="h-48 w-48 object-contain rounded-t-xl" />
            <div className="px-4 py-3 w-40 md:w-44">
                <span className="text-gray-400  uppercase text-xs">{category_name}</span>
                <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                <div className="flex items-center  justify-between px-2">
                    <p className="text-md font-semibold text-black cursor-auto my-3">${price}</p>
                  
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    </div>
    
    </>
  )
}

export default ProductCard
