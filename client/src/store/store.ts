import { configureStore } from '@reduxjs/toolkit';

import { companySentimentApi } from 'pages/CompanySentiment/companySentimentApi.slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      companySentimentApi.middleware,
    ),
  reducer: {
    [companySentimentApi.reducerPath]: companySentimentApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
