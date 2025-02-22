import { configureStore } from '@reduxjs/toolkit';
import energyReducer from './features/energy-slice';

export const store = configureStore({
  reducer: {
    energy: energyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
