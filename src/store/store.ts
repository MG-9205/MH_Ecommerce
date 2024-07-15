import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import frameReducer, { FrameState } from '@/store/feature/FrameSlice'

export const store = configureStore({
    reducer: {
        frame: frameReducer
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export type RootState = {
    frame: FrameState;
};

// Example of ThunkDispatch usage
type AppThunkDispatch = ThunkDispatch<RootState, unknown, any>;
export const useAppThunkDispatch: () => AppThunkDispatch = useDispatch;
