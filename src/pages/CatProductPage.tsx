import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import ProductCard from "@/components/ProductCard";
import { useProduct } from "@/customHooks/useProduct";
import { Product } from "@/type/Types";
import { FilterIcon, X } from "lucide-react";

type CategoryContextType = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const CategoryContext = createContext<
  CategoryContextType | undefined | any
>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = useState<string>("School");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default function CatProductPage() {
  const { category } = useContext(CategoryContext);
  const productData: Array<Product> = useProduct(category);
  const [filter, setFilter] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Array<Product>>(productData);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  useEffect(() => {
    setFilteredData(productData);
  }, [productData]);

  const applyFilter = () => {
    const sortByPrice = (a: Product, b: Product) => {
      const priceA = a.price !== null ? a.price : Infinity;
      const priceB = b.price !== null ? b.price : Infinity;
      return priceA - priceB;
    };
    const sortByPriceDescending = (a: Product, b: Product) => {
      const priceA = a.price !== null ? a.price : -Infinity;
      const priceB = b.price !== null ? b.price : -Infinity;
      return priceB - priceA;
    };

    if (selectedFilter === "minToMax") {
      setFilteredData([...productData].sort(sortByPrice));
    } else if (selectedFilter === "maxToMin") {
      setFilteredData([...productData].sort(sortByPriceDescending));
    }

    setFilter(false);
  };

  return (
    <>
      <section className="relative">
        <div className="text-center py-5 pt-[70px] md:pt-5 font-DancingScript text-custom_shade4 font-semibold md:text-[3rem] text-[2rem]">
          Welcome to MH Bag {category ?? ""} Collection
        </div>
        <section
          id="Projects"
          className="overflow-x-hidden w-fit py-8 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-y-12 gap-x-8 mt-10 mb-5 px-6 md:px-7 overflow-y-hidden"
        >
          {filteredData.map((ele: Product) => (
            <ProductCard key={ele.id} {...ele} />
          ))}
        </section>
        <div
          className="flex absolute top-[20px] left-[20px] cursor-pointer"
          onClick={() => setFilter((prev) => !prev)}
        >
          <div className="bg-custom_shade3 py-2 px-2 rounded-[5px]">
            <FilterIcon className="text-white" />
          </div>
        </div>
      </section>

      {filter && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50 font-Montserrat">
          <div className="bg-white relative p-6 rounded-lg shadow-lg w-[90%] max-w-[350px] flex flex-col md:flex-row md:justify-between justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center w-[100%] gap-2">
              <div className="flex justify-center items-center gap-4 text-[1.2rem]">
                <label htmlFor="minToMax">Min to Max</label>
                <input
                  type="radio"
                  name="filterOption"
                  id="minToMax"
                  checked={selectedFilter === "minToMax"}
                  onChange={() => setSelectedFilter("minToMax")}
                />
              </div>
              <div className="flex justify-center items-center gap-4 text-[1.2rem]">
                <label htmlFor="maxToMin">Max to Min</label>
                <input
                  type="radio"
                  name="filterOption"
                  id="maxToMin"
                  checked={selectedFilter === "maxToMin"}
                  onChange={() => setSelectedFilter("maxToMin")}
                />
              </div>
              <button
                className="bg-custom_shade4 px-2 py-1 rounded-[5px] outline-none text-[1.2rem] mt-4 text-white"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
            </div>
            <div
              className="absolute right-[6px] top-[8px] cursor-pointer"
              onClick={() => setFilter((prev) => !prev)}
            >
              <X />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
