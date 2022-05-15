import { configureStore } from "@reduxjs/toolkit";
import responsesReducer from "../features/responses/responsesSlice";

const reducers = {
    reducer: {
        responses: responsesReducer
    }
}

const store = configureStore(reducers);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;