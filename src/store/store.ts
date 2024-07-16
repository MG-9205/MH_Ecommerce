import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import frameReducer, { FrameState } from '@/store/feature/FrameSlice';
import productReducer, { ProductState } from '@/store/feature/ProductSlice';

// Configure the store with both reducers
export const store = configureStore({
    reducer: {
        frame: frameReducer,
        product: productReducer,
    },
});

// Define the RootState type to include both slices
export type RootState = {
    frame: FrameState;
    product: ProductState;
};

// Typed versions of useDispatch and useSelector hooks
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Example of ThunkDispatch usage
type AppThunkDispatch = ThunkDispatch<RootState, unknown, any>;
export const useAppThunkDispatch: () => AppThunkDispatch = useDispatch;

