import useCart from '@/customHooks/useCart';
import { useAppSelector } from '@/store/store';
import { CartItem, Product } from '@/type/Types';
import ProductService from '@/utility/Product';
import React, { useEffect, useState } from 'react';

interface CheckOutCardProps {
  cartItem: CartItem;
  product: Product;
}

const CheckOutCard = ({ cartItem, product }: CheckOutCardProps) => {
if(!product){
  return
}
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <img className="m-2 h-24 w-28 rounded-md object-cover object-center" src={product.imgUrl ?? ''} alt="" />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{product.name}</span>
        <span className="float-right text-gray-400">qty : {cartItem.quantity}</span>
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    </div>
  );
};

const Checkout: React.FC = () => {
  const [email, setEmail] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [creditExpiry, setCreditExpiry] = useState('');
  const [creditCvc, setCreditCvc] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingZip, setBillingZip] = useState('');
  const [shippingMethod, setShippingMethod] = useState('radio_1');
  const [products, setProducts] = useState<{ [key: string]: Product }>({});
  const user = useAppSelector(state => state.user.value);

  const { cartItems } = useCart(user);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: { [key: string]: Product } = {};
      for (const item of cartItems ?? []) {
        const product = await ProductService.getProductById(item.product_id);
        fetchedProducts[item.product_id] = product[0];
      }
      console.log(fetchedProducts)
      setProducts(fetchedProducts);
    };
    if (cartItems?.length ?? 0 > 0) {
      fetchProducts();
    }
  }, [cartItems]);

  const calculateTotalPrice = () => {

    if(!cartItems){
      return 0
    }
    return cartItems?.reduce((total, item) => {
      const product = products[item.product_id];
      return total + (product ? (product.price?? 0) * item.quantity : 0);
    }, 0);

  
  };

  const handlePlaceOrder = () => {
    // Add order placement logic here
    console.log('Order placed');
  };

  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">MH Bags</a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 overflow-auto h-[280px]">
            {cartItems?.map((item: CartItem, index) => (
              <CheckOutCard key={index} cartItem={item} product={products[item.product_id]} />
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input className="peer hidden" id="radio_1" type="radio" name="radio" checked={shippingMethod === 'radio_1'} onChange={() => setShippingMethod('radio_1')} />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input className="peer hidden" id="radio_2" type="radio" name="radio" checked={shippingMethod === 'radio_2'} onChange={() => setShippingMethod('radio_2')} />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">Complete your order by providing your payment details.</p>
          <div className="">
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
            <div className="relative">
              <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg aria-hidden="true" className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v4H8v-4H4l8-8 8 8h-4z"></path>
                </svg>
              </div>
            </div>
            <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
            <div className="relative">
              <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg aria-hidden="true" className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12-6v12c0 1.657-1.343 3-3 3H6c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h12c1.657 0 3 1.343 3 3z"></path>
                </svg>
              </div>
            </div>
            <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" value={cardNo} onChange={(e) => setCardNo(e.target.value)} />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg aria-hidden="true" className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11h16M4 15h16m-7-7h2m-4 0h2"></path>
                  </svg>
                </div>
              </div>
              <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" value={creditExpiry} onChange={(e) => setCreditExpiry(e.target.value)} />
              <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" value={creditCvc} onChange={(e) => setCreditCvc(e.target.value)} />
            </div>
            <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg aria-hidden="true" className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>
              </div>
              <select id="billing-state" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"  value={billingState} onChange={(e) => setBillingState(e.target.value)}>
                <option value="State">State</option>
              </select>
              <input type="text" id="billing-zip" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" value={billingZip} onChange={(e) => setBillingZip(e.target.value)} />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">${calculateTotalPrice()}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">${calculateTotalPrice() + 8}</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
