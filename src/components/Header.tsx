import React, { memo, useState } from "react";
import Logo from "@/assets/Images/MH_BAG_logo.png";
import SchoolBag from "@/assets/Images/SchoolBag.jfif";
import CarryBag from "@/assets/Images/CarryBag.jfif";
import Cultch from "@/assets/Images/Cultch.jfif";
import HandBag from "@/assets/Images/HandBag.jfif";
import ShoppingBag from "@/assets/Images/ShoppingBag.jfif";
import TravellingBag from "@/assets/Images/TravellingBag.jfif";
import Sider from "@/assets/Images/sider.jfif";
import Suitcase from "@/assets/Images/suitcase.jfif";
import Wallet from "@/assets/Images/wallet.jfif";
import "@/App.css";
import {
  Heart,
  Search,
  ShoppingBasket,
  ShoppingCart,
  Store,
  User,
  ChevronDown,
  EllipsisVertical,
  X,
} from "lucide-react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

const Login_btn = () => {
  return (
    <Tippy
      content={<LoginT />}
      interactive={true}
      theme="light"
      placement="bottom"
    >
      <div className="flex gap-1 justify-center items-center bg-custom_shade4 text-white py-2 px-2 rounded-[10px] cursor-pointer group">
        <User />
        <span className="font-semibold">Login</span>
        <span className="transform transition-transform duration-300 group-hover:rotate-[-180deg] font-semibold">
          <ChevronDown />
        </span>
      </div>
    </Tippy>
  );
};

const LoginT = () => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer text-[1.2rem] md:text-[0.9rem]">
      <div className="flex gap-2 text-[1.1rem] border-b-[1px] border-b-custom_shade3 pb-2">
        <span>New Customer ? </span>
        <span className="text-custom_shade4">SignUp</span>
      </div>
      <div className="flex gap-2 font-medium hover:text-custom_shade4 items-center">
        <User />
        My Profile
      </div>
      <div className="flex gap-2 font-medium hover:text-custom_shade4 items-center">
        <Heart />
        WishList
      </div>
      <div className="flex gap-2 font-medium hover:text-custom_shade4 items-center">
        <ShoppingBasket />
        Orders
      </div>
    </div>
  );
};

const SearchBar = memo(() => {
  return (
    <div className="flex gap-1 justify-center items-center bg-custom_shade1 py-2 px-2 rounded-[10px] ">
      <Search className="cursor-pointer text-custom_shade5" />
      <input
        type="text"
        name="Search"
        placeholder="Search For Product,Brand and more"
        className="md:w-[400px] w-[100%] bg-transparent outline-none"
      />
    </div>
  );
});

const CategoryCard = ({
  img_url,
  text,
}: {
  img_url: string;
  text: string;
  key?: number;
}) => {
  return (
    <div className="flex flex-col justify-center items-center py-1 cursor-pointer">
      <div className="min-h-[80px] min-w-[80px]">
        <img
          src={img_url}
          alt=""
          className="h-[80px] w-[80px] object-cover rounded-[50%]"
        />
      </div>
      <div className="text-white font-medium">{text}</div>
    </div>
  );
};

export default function Header() {
  const [menu, setmenu] = useState<boolean>(false);

  type Category = {
    img_url: string;
    Category_name: string;
  };

  const categoryData: Array<Category> = [
    {
      img_url: SchoolBag,
      Category_name: "School",
    },
    {
      img_url: TravellingBag,
      Category_name: "Travel",
    },
    {
      img_url: ShoppingBag,
      Category_name: "Shopping",
    },
    {
      img_url: Cultch,
      Category_name: "Cultch",
    },
    {
      img_url: HandBag,
      Category_name: "Hand Bags",
    },
    {
      img_url: CarryBag,
      Category_name: "Carry Bags",
    },
    {
      img_url: Suitcase,
      Category_name: "Suitcase",
    },
    {
      img_url: Sider,
      Category_name: "Sider",
    },
    {
      img_url: Wallet,
      Category_name: "Wallet",
    },
  ];

  return (
    <>
      <header className="w-[100%] flex flex-col justify-center items-center overflow-hidden">
        <div className="md:max-w-[1200px] w-[100%] h-[70px] flex justify-around items-center py-2 overflow-hidden">
          <div>
            <img src={Logo} alt="" className="h-[50px] w-[80px]" />
          </div>
          <div className="flex">
            <SearchBar />
          </div>
          <div className="hidden md:block">
            <Login_btn />
          </div>
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <ShoppingCart />
            <p className="hidden md:inline">Cart</p>
          </div>
          <div className="md:flex gap-2 justify-center items-center cursor-pointer hidden">
            <Store />
            <p> Become a Seller</p>
          </div>
          <div className="md:hidden" onClick={() => setmenu((prev) => !prev)}>
            <EllipsisVertical />
          </div>
        </div>
        <div
          className={`fixed z-10 bg-white top-[0px] w-[100%] right-0 h-[100vh] flex flex-col gap-3 px-3 py-2 transition-transform duration-300 ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end" onClick={() => setmenu((prev) => !prev)}><X/></div>
          <div>
            <LoginT />
          </div>
          <div className="flex gap-2 items-center cursor-pointer text-[1.2rem] font-semibold">
            <Store />
            <p> Become a Seller</p>
          </div>
        </div>
        <div className="bg-custom_shade4 w-full overflow-x-auto flex justify-center items-center">
          <nav className="w-full overflow-x-auto flex justify-around gap-4 lg:gap-0 py-2 px-2 lg:px-0">
            {categoryData.map((ele: Category, key: number) => (
              <CategoryCard
                img_url={ele.img_url}
                text={ele.Category_name}
                key={key}
              />
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}