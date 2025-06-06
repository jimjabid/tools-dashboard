import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // We'll add reducers here as we create them
  },
});

export const RootState = () => store.getState();
export const AppDispatch = () => store.dispatch; 