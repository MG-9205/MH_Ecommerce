import {useEffect, useState} from 'react';
import { Plus, Minus } from 'lucide-react';
import useCart from '@/customHooks/useCart';
import { useAppSelector } from '@/store/store';
import { CartItem } from '@/type/Types';
import CartService from '@/utility/Cart';
import ProductService from '@/utility/Product';
import { Product } from '@/type/Types';
import { useQueryClient } from 'react-query';
import cartQueryKeys from '@/helper/Cart';
import { Link } from 'react-router-dom';



interface ProductItemProps {
  cartItem:CartItem;
}




 function Counter({cartItem}:{
 cartItem:CartItem
 }) {
  const [count, setCount] = useState(cartItem.quantity);
  const queryClient=useQueryClient()


  const increment = (e:any) => { 
    e.preventDefault();
    setCount(prevCount => {
      const newCount = prevCount + 1;
        CartService.IncrementQuantity(cartItem, newCount);
        if(newCount==0){
          queryClient.invalidateQueries(cartQueryKeys.cartItems)
        }
      return newCount;
    });};
  const decrement = async(e:any) => {
    e.preventDefault();
    setCount(prevCount => {
      const newCount = prevCount - 1;
        CartService.decrementQuantity(cartItem, newCount);
        if(newCount==0){
          queryClient.invalidateQueries(cartQueryKeys.cartItems)
        }
      return newCount;
    });
   
  
  };

  return (
    <div className="flex items-center justify-between rounded-md w-[80px] h-[10px] ">
      <button
        onClick={(e)=>decrement(e)}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none bg-slate-400"
      >
        <Minus className="w-2 h-2" />
      </button>
      <span className="p-2 w-2 h-2 text-sm font-semibold flex justify-center items-center ">{count}</span>
      <button
        onClick={(e)=>increment(e)}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none bg-slate-400"
      >
        <Plus className="w-2 h-2" />
      </button>
    </div>
  );
}

function ProductItem({ cartItem }: ProductItemProps) {

  const [product, setProduct] = useState<Product[] | null>(null);
  const queryClient=useQueryClient()
  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await ProductService.getProductById(cartItem.product_id);
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [cartItem]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleRemove=async(e:any)=>{
    e.preventDefault();
    await CartService.removeCartItem(cartItem.cart_id,cartItem.product_id)
    queryClient.invalidateQueries(cartQueryKeys.cartItems)
    
  
  }


  return (
    <li key={product[0].id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt="product Image"
          src={product[0].imgUrl ?? ""}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <span>{product[0].name}</span>
            </h3>
            <p className="ml-4">{product[0].price}</p>
          </div>
          <span>{product[0].category_name}</span>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="text-gray-500 flex justify-center items-center gap-2"><p>Qty:</p> <Counter cartItem={cartItem}/> </div>
                
          <div className="flex">
            <button
              type="button"
              className="font-medium text-custom_shade3 hover:text-custom_shade4"
             onClick={(e)=>handleRemove(e)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}



export default function Cart() {
 const user = useAppSelector((state) => state.user.value);
 const{cartItems}=useCart(user)




  return (
   
      <div className='overflow-hidden '>
        <div className="mt-2 overflow-y-auto h-[400px]  w-full">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200 pr-2">
              {cartItems?.map((product:CartItem,index) => (
                <ProductItem key={index} cartItem={product} />
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="mt-6">
            <Link
              to='/Checkout'
              className="flex items-center justify-center rounded-md border border-transparent bg-custom_shade4 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                type="button"
                
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>

  );
}
