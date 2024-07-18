import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import frameReducer, { FrameState } from '@/store/feature/FrameSlice';
import productReducer, { ProductState } from '@/store/feature/ProductSlice';
import userReducer, { userState } from '@/store/feature/UserSlice';

// Configure the store with all reducers
export const store = configureStore({
  reducer: {
    frame: frameReducer,
    product: productReducer,
    user: userReducer,
  },
});

// Define the RootState type to include all slices
export type RootState = {
  frame: FrameState;
  product: ProductState;
  user: userState;
};

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Typed versions of useDispatch and useSelector hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Example of ThunkDispatch usage
type AppThunkDispatch = ThunkDispatch<RootState, unknown, any>;
export const useAppThunkDispatch: () => AppThunkDispatch = useDispatch;
