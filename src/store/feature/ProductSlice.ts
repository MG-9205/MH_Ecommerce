import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type/Types";
import Logo from "@/assets/Images/MH_BAG_logo.png"
import { RootState } from "@/store/store";


export interface ProductState {
    value: Product;
}

const initialState: ProductState = {
    value: {
        id:"3120001546",
        name: "MH BAG",
        description: "We provide high quality customisable bag for every one",
        price: 52.26,
        imgUrl: Logo,
        stock: true,
        feature: "Modern",
        dimension: "Medium",
        material: "Fibric",
        category_name: "MH Bag",
    }
};

const ProductSlice= createSlice({
    name:"ProductSlice",
    initialState,
    reducers:{
        setProductState:(state,action: PayloadAction<Product>)=>{
            state.value= action.payload
        }
    }
})

export const {setProductState}= ProductSlice.actions

export const selectProduct = (state: RootState) => state.product.value;

export default ProductSlice.reducer