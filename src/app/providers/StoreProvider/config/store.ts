import { baseApi } from '@/shared/api/rtkApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export const createReduxStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidleware) =>
      getDefaultMidleware().concat(baseApi.middleware),
  });
};
