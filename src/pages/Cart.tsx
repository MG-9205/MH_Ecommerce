import {useState} from 'react';
import { Plus, Minus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  href: string;
  color: string;
  price: string;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },

];

interface ProductItemProps {
  product: Product;
}




 function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex items-center justify-between rounded-md w-[80px] h-[10px] ">
      <button
        onClick={decrement}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none bg-slate-400"
      >
        <Minus className="w-2 h-2" />
      </button>
      <span className="p-2 w-2 h-2 text-sm font-semibold flex justify-center items-center ">{count}</span>
      <button
        onClick={increment}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none bg-slate-400"
      >
        <Plus className="w-2 h-2" />
      </button>
    </div>
  );
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <li key={product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className="ml-4">{product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="text-gray-500 flex justify-center items-center gap-2"><p>Qty:</p> <Counter/> </div>
                
          <div className="flex">
            <button
              type="button"
              className="font-medium text-custom_shade3 hover:text-custom_shade4"
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
  return (
   
      <div className='overflow-hidden '>
        <div className="mt-2 overflow-y-auto  w-full">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200 pr-2">
              {products.map((product,index) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-custom_shade4 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
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
