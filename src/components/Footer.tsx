import React from 'react'
import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import Logo from "@/assets/Images/MH_BAG_logo.png";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-custom_shade4 py-14 overflow-x-hidden md:mt-0 mt-3">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-14 bg-custom_shade4 text-white font-Montserrat">
        <div className="flex flex-col lg:gap-4 gap-6 justify-center items-center lg:justify-start lg:items-start">
          <div>
            <img src={Logo} alt="" className="h-[100px] w-[140px]" />
          </div>
          <div className="flex flex-col gap-1 justify-center items-center lg:items-start ">
            <span className="text-[1.1rem]">
              A little bit more about MH Bags
            </span>
            <span className="lg:w-[600px] w-[90%] font-DancingScript text-[1.5rem] text-center lg:text-left">
              Your one-stop shop for all types of bags. Discover, shop, and enjoy premium quality with MH Bags.
            </span>
          </div>
          <div className="flex gap-6 py-4">
            <a href="https://www.linkedin.com/in/manishgupta31" target="blank"><Linkedin /></a>
            <a href="https://www.instagram.com/manish_gupta31/" target="blank"><Instagram /></a>
            <a href="https://twitter.com/Manish_Gupta31" target="blank"><Twitter /></a>
            <a href="https://github.com/MG-9205" target="blank"><Github/></a>
          </div>
          <div>© 2023 MH Bags. All rights reserved.</div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Quick Links</span>
            <span>Home</span>
            <span>Shop</span>
            <span>Contact</span>
            <span>About Us</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Connect with us</span>
            <span><a href="https://www.linkedin.com/in/manishgupta31" target="blank">LinkedIn</a></span>
            <span><a href="https://www.instagram.com/manish_gupta31/" target="blank">Instagram</a></span>
            <span><a href="https://twitter.com/Manish_Gupta31" target="blank">Twitter</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
