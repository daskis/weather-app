// store.ts
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { weatherApi } from "./api/weatherApi";
import searchCitySlice from "./slices/searchCitySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import weatherSlice from "./slices/weatherSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Определение типа RootState
export type RootState = ReturnType<typeof store.getState>;

// Определение типа Dispatch
export type AppDispatch = typeof store.dispatch;
// Typed version of useDispatch and useSelector hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistConfig = {
    key: "root",
    storage, // Здесь укажите хранилище, в данном случае - localStorage
    whitelist: ["weather"], // Здесь укажите имена срезов, которые необходимо сохранить
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    searchCity: searchCitySlice,
    weather: weatherSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
}));

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        // Отключаем проверку на сериализацию для redux-persist
        serializableCheck: false,
    }).concat(weatherApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
