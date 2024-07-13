import bg_school_bg from "@/assets/Images/bg_school_bag.jpg";
import {
  Car,
  Headphones,
  IndianRupee,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/services/SupabaseClient";
import HeroSection from "@/components/HeroSection";
import { useEffect } from "react";
import { useProduct } from "@/customHooks/useProduct";
import { Product } from "@/type/Types";

const LargeProductCard = () => {
  return (
    <>
      <article className="max-w-sm w-[80vw]  md:w-full bg-white rounded-lg shadow-lg overflow-hidden text-black">
        <div>
          <img
            className="object-cover h-64 w-full"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Converse sneakers"
          />
        </div>

        <div className="flex flex-col gap-1 mt-4 px-4">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Converse Sneakers
          </h2>
          <span className="font-normal text-gray-600 ">
            High Top (Lemon Yellow)
          </span>
          <span className="font-semibold text-gray-800 ">$60</span>
        </div>

        <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
          <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 ">
            <span className="text-base">Add to Cart</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </article>
    </>
  );
};

export default function Home() {
  const productData:Array<Product>=useProduct('Hand Bag')
 
  return (
    <>
      <HeroSection/>

      <section
        id="Projects"
        className=" overflow-x-hidden  w-fit  py-8 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-12 gap-x-8 mt-10 mb-5 px-6 md:px-7 overflow-y-hidden"
      >
        {productData.map((ele: Product) => (
          <ProductCard key={ele.id} {...ele} />
        ))}
      </section>

      <section id="About" className="container mx-auto px-4 sm:px-6 py-12">
        <div className="relative">
          <div className="relative top-0 left-1/2 transform -translate- overflow-hiddenx-1/2 h-14 w-[0.7px] bg-custom_shade4"></div>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold text-gray-900">About Us</h2>
          <p className="mt-3 text-2xl font-bold text-gray-700 italic">
            "Reimagining how you carry your world."
          </p>
          <p className="mt-6 text-lg text-gray-800 font-Montserrat lg:w-[850px]">
            At MH Bag, we blend style with functionality to create innovative
            bags for the modern lifestyle. Our mission is to craft products that
            are not only aesthetically pleasing but also practical and durable.
            Whether you're commuting to work or exploring the outdoors, MH Bag
            is your trusted companion.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden pb-[120px] overflow-x-hidden">
        <div
          className="inset-0 md:bg-cover bg-no-repeat  bg-center md:h-[600px] h-[50vh] lg:bg-fixed"
          style={{ backgroundImage: `url(${bg_school_bg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-0"></div>
        </div>
        <div className="lg:flex lg:items-end absolute z-10 bottom-[5px] md:left-[50px] left-[20px]">
          <div className="hidden md:block">
            <LargeProductCard />
          </div>
          <div className="block md:hidden">
            <ProductCard {...productData[0]} />
          </div>
        </div>
      </section>

      <section id="WhyUS" className="container mx-auto px-4 sm:px-6 py-12 ">
        <div className="relative">
          <div className="relative top-0 left-1/2 transform -translate- overflow-hiddenx-1/2 h-14 w-[0.7px] bg-custom_shade4"></div>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-3 text-2xl font-bold text-gray-700 italic">
            "Elevating your experience with us."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-around items-center pt-10 pb-8 font-Montserrat">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="bg-custom_shade4 px-2 py-2 rounded-[50%] flex justify-center items-center ">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <span className="text-[1.2rem] font-bold">Efficient Service</span>
              <span className="w-[250px] text-center">
                Providing prompt and efficient service to ensure your
                satisfaction.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="bg-custom_shade4 px-2 py-2 rounded-[50%] flex justify-center items-center  ">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <span className="text-[1.2rem] font-bold">24/7 Support</span>
              <span className="w-[250px] text-center">
                Always available to provide round-the-clock support whenever you
                need it.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="bg-custom_shade4 px-2 py-2 rounded-[50%] flex justify-center items-center ">
              <IndianRupee className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <span className="text-[1.2rem] font-bold">
                Competitive Pricing
              </span>
              <span className="w-[250px] text-center">
                Offering competitive pricing without compromising on quality.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-[32vh] md:pb-0 overflow-x-hidden">
        <div
          className="inset-0 md:bg-cover bg-no-repeat  bg-center md:h-[600px] h-[50vh] lg:bg-fixed"
          style={{ backgroundImage: `url(${bg_school_bg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-0"></div>
        </div>
        <div className="lg:flex lg:items-end absolute z-10 md:bottom-[10%]  bottom-[0%] md:left-[50px] left-[10vw]">
          <div className="">
            <LargeProductCard />
          </div>
        </div>
      </section>
    </>
  );
}
