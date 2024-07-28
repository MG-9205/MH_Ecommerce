import { useState, useEffect } from 'react';
import { Product } from "@/type/Types";
import ProductService from '@/utility/Product';

const useProduct = (CategoryName: string): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProductByCategory(CategoryName);
      setProducts(data);
    };
    fetchProducts();
  }, [CategoryName]);

  return products;
};

export { useProduct };
