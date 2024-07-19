import { useState, useEffect } from 'react';
import { supabase } from "@/services/SupabaseClient";
import { Product } from "@/type/Types";

const useProduct = (CategoryName: string): Product[] => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('Product')
        .select(`
          id,
          Name,
          Description,
          Price,
          Img_url,
          Stock,
          Category!inner (
            Cat_name
          ),
          ProductFeature!inner (
            Feature,
            Dimension,
            Material
          )
        `)
        .eq('Category.Cat_name', CategoryName);

      if (error) {
        console.error(error);
      } else {
        console.log(data);
        const formattedData: Product[] = data.map((product: any) => ({
          id: product.id,
          name: product.Name,
          description: product.Description,
          price: product.Price,
          imgUrl: product.Img_url,
          stock: product.Stock,
          feature: product.ProductFeature?.Feature,
          dimension: product.ProductFeature?.Dimension,
          material: product.ProductFeature?.Material,
          category_name: product.Category.Cat_name,
        }));

        setProducts(formattedData);
      }
    };

    fetchProducts();
  }, [CategoryName]);

  return products;
};

export { useProduct };
