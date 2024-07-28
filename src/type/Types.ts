type infoType={
    key:string,
    value:string
}

export interface Product {
    id: string;
    name: string | null;
    description: string | null;
    price: number | null;
    imgUrl: string | null;
    stock: boolean | null;
    feature: string | null;
    dimension: string | null;
    material: string | null;
    category_name: string;
  }
export type Category = {
    Cat_name: string;
    created_at: string;
    id: string;
    Img_url: string | null;
  }

export type User={
    Name:string;
    Password:string;
    Email:string
}

export type CartItem = {
  cart_id: string
  created_at: string
  id: string
  product_id: string
  quantity: number
}

export type UserCart = {
  created_at: string
  id: string
  user_id: string 
}

