import { useEffect, useState } from "react";
import { CartItem, UserCart } from "@/type/Types";
import CartService from "@/utility/Cart";
import { useQuery } from "react-query";
import cartQueryKeys from "@/helper/Cart";


type User={
    Name:string;
    Email:string;
    id:string
  }

type hookeReturnType ={
  cart?: UserCart
  cartItems?:CartItem[]
}

const useCart = (user: User | undefined):hookeReturnType => {


  const { data: cart } = useQuery({
    queryKey: cartQueryKeys.cart,
    queryFn: async () => {
      const data = await CartService.getUserCart(user?.id ?? "");
      return data;
    },
    enabled: !!user?.id,
  });

  const { data: cartItems } = useQuery({
    queryKey: cartQueryKeys.cartItems,
    queryFn: async () => {
      const data = await CartService.getCartItem(cart?.id ?? "");
      return data;
    },
    enabled: !!cart,
  });


  return {cart,cartItems};
};

export default useCart;