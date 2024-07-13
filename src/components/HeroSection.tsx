import { Product } from "@/type/Types";
import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import homeImg from "@/assets/Images/handBag_home.png";
import bgImg from "@/assets/Images/bg2.png";

export default function HeroSection() {
  const heroProduct: Product & { title: string } = {
    id: "1",
    name: "Blush Rose Handbag",
    title: "Elegant Light Pink Handbag",
    description:
      "Elevate your style with our Elegant Light Pink Handbag. This chic accessory combines sophistication with practicality, making it the perfect addition to any wardrobe. Crafted from high-quality materials.",
    price: 49.99,
    imgUrl: homeImg,
    feature: "Adjustable",
    material: "FauxLeather",
    dimension: "Medium",
    stock: true,
    category_name: "Hand Bag",
  };

  return (
    <section
      className="flex justify-center items-center lg:h-[100vh] min-h-fit bg-no-repeat font-Montserrat overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="flex lg:justify-between justify-center w-[100%] lg:w-[1300px] flex-wrap ">
        <div>
          <div className="flex flex-col lg:gap-2 gap-6 lg:py-0 mt-5 lg:justify-between justify-center items-center lg:items-start h-[350px]">
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-1 ">
              <span className="text-[2rem] font-semibold">
                {heroProduct.name}
              </span>
              <span className="text-[1.8rem] text-slate-400 font-DancingScript">
                {heroProduct.title ?? "Hand bag with modern look"}
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
              <div className="text-[1.2rem] font-medium">Information:</div>
              <div className="flex gap-2 flex-wrap justify-center items-center md:justify-start md:items-start ">
                <div className=" border-2 border-custom_shade3 flex flex-col gap-1 px-2 py-1 rounded-[10px] justify-center items-center md:justify-start md:items-start">
                  <span className="md:text-[1.2rem] text-[1rem] font-montserrat font-semibold text-custom_shade4">
                    {heroProduct.material}
                  </span>
                  <span className="text-custom_shade3 font-Montserrat">
                    Material
                  </span>
                </div>

                <div className=" border-2 border-custom_shade3 flex flex-col gap-1 px-2 py-1 rounded-[10px] justify-center items-center md:justify-start md:items-start">
                  <span className="md:text-[1.2rem] text-[1rem] font-montserrat font-semibold text-custom_shade4">
                    {heroProduct.dimension}
                  </span>
                  <span className="text-custom_shade3 font-Montserrat">
                    Dimension
                  </span>
                </div>

                <div className=" border-2 border-custom_shade3 flex flex-col gap-1 px-2 py-1 rounded-[10px] justify-center items-center md:justify-start md:items-start">
                  <span className="md:text-[1.2rem] text-[1rem] font-montserrat font-semibold text-custom_shade4">
                    {heroProduct.feature}
                  </span>
                  <span className="text-custom_shade3 font-Montserrat">
                    Feature
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:justify-between justify-center">
              <div className="text-[1.3rem] text-slate-500">
                ${heroProduct.price}
              </div>
              <div>
                <button className="bg-custom_shade4 py-2 px-4 text-white font-semibold rounded-[5px]">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:top-[70px] lg:right-[40px]">
          <img src={heroProduct.imgUrl ?? ""} alt="" />
        </div>
        <div className="flex flex-col md:gap-2 h-[350px] lg:mt-5 lg:justify-between items-center justify-center lg:items-start gap-4  ">
          <div className="flex flex-col">
            <span className="font-semibold lg:text-left text-center pb-2">
              Description:{" "}
            </span>
            <span className="lg:w-[300px] md:w-[400px] px-3 md:px-0 lg:text-left text-center ">
              {heroProduct.description}
            </span>
          </div>
          <div className="flex gap-2 flex-col justify-center items-center  lg:items-start">
            <div className="font-semibold ">Contact us</div>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/manishgupta31"
                target="blank"
                className="bg-black px-2 py-2 rounded-[50%] hover:bg-custom_shade3"
              >
                <Linkedin className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/manish_gupta31/"
                target="blank"
                className="bg-black px-2 py-2 rounded-[50%] hover:bg-custom_shade3"
              >
                <Instagram className="text-white" />
              </a>
              <a
                href="https://twitter.com/Manish_Gupta31"
                target="blank"
                className="bg-black px-2 py-2 rounded-[50%] hover:bg-custom_shade3"
              >
                <Twitter className="text-white" />
              </a>
              <a
                href="https://github.com/MG-9205"
                target="blank"
                className="bg-black px-2 py-2 rounded-[50%] hover:bg-custom_shade3"
              >
                <Github className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
