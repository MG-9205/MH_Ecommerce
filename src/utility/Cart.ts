import { CartItem, UserCart } from "@/type/Types";
import { supabase } from "@/services/SupabaseClient";
import { AwardIcon } from "lucide-react";

const CartService = {
  getUserCart: async (userId: string): Promise<UserCart> => {
    const { data: cart, error: cartError } = await supabase
      .from("UserCart")
      .select("*")
      .eq("user_id", userId)
      .single(); // Use .single() to ensure only one record is returned

    if (cartError && cartError.code !== 'PGRST116') { // PGRST116 means no rows returned
      throw new Error(`Error fetching user cart: ${cartError.message}`);
    }

    if (cart) {
      return cart;
    } else {
      const { data, error } = await supabase.from("UserCart").insert({
        user_id: userId,
      }).select();

      if (error) {
        throw new Error(`Error creating user cart: ${error.message}`);
      }

      return data[0];
    }
  },

  addCartItem: async (cartId: string, productId: string,userid:string): Promise<CartItem> => {
   if(!userid){
    alert("it's look like you are not login")
    return {
      cart_id:'',
      id:"",
      product_id:'',
      created_at:"",
      quantity:0
    }
   }
    const { data: existingCartItem, error: existingCartItemError } = await supabase
      .from("cartItem")
      .select("*")
      .eq("cart_id", cartId)
      .eq("product_id", productId)
      console.log('hello')

    if (existingCartItemError && existingCartItemError.code !== 'PGRST116') {
      throw new Error(`Error fetching cart item: ${existingCartItemError.message}`);
    }

    if (existingCartItem?.length) {
      return existingCartItem[0];
    } else {
      const { data, error } = await supabase.from("cartItem").insert({
        cart_id: cartId,
        product_id: productId,
        quantity:1
      }).select();

      if (error) {
        throw new Error(`Error adding cart item: ${error.message}`);
      }
        
      return data[0];
    }
  },

  getCartItem: async (
    cartId: string,
  ): Promise<Array<CartItem>>=> {
    const { data, error } = await supabase
    .from("cartItem")
    .select('*')
    .eq("cart_id", cartId);

    if (error) {
      throw new Error(`Error fetching cart item: ${error.message}`);
    }

    return data;
  },

  removeCartItem: async (cartId: string, productId: string) => {
    const { error } = await supabase
      .from("cartItem")
      .delete()
      .eq("cart_id", cartId)
      .eq("product_id", productId);

      console.log(cartId,productId)

    if (error) {
      throw new Error(`Error removing cart item: ${error.message}`);
    }
  },
  decrementQuantity: async (cartItem:CartItem,quantity: number): Promise<CartItem> => {

    if (quantity <= 0) {
      await CartService.removeCartItem(cartItem.cart_id, cartItem.product_id);
      return { ...cartItem, quantity: 0 };
    }
    const { data:item, error } = await supabase
      .from("cartItem")
      .update({ quantity})
      .eq("cart_id", cartItem.cart_id)
      .eq("product_id", cartItem.product_id)
      .select()
      .single();

      if (error) {
        throw new Error(`Error decrementing cart item quantity: ${error.message}`);
      }
  
      return item;
  },
  IncrementQuantity: async (cartItem:CartItem,quantity: number): Promise<CartItem> => {

    const { data:item, error } = await supabase
      .from("cartItem")
      .update({ quantity})
      .eq("cart_id", cartItem.cart_id)
      .eq("product_id", cartItem.product_id)
      .select()
      .single();

      if (error) {
        throw new Error(`Error decrementing cart item quantity: ${error.message}`);
      }
  
      return item;
  }
};

export default CartService;
