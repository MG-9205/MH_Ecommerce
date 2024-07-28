import { supabase } from "@/services/SupabaseClient";
import { Product } from "@/type/Types";

const ProductService={
    getProductByCategory: async(category:string):Promise<Product[]>=>{
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
        .eq('Category.Cat_name', category);

      if (error) {
        console.error(error);
        return []
      } else {
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

       return formattedData
      }
    },
    getProductById: async(id:string):Promise<Product[]>=>{
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
        .eq('id', id);

      if (error) {
        console.error(error);
        return []
      } else {
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

       return formattedData
      }
    }
}

export default ProductService