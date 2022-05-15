import { configureStore } from "@reduxjs/toolkit";
import responsesReducer from "../features/responses/responsesSlice";

const loadState = () => {
    try {
        const stringifiedState = localStorage.getItem('state');
        return stringifiedState ? JSON.parse(stringifiedState) : undefined;
    } catch (e) {
        console.log(e);
    }
}

const saveState = (state: RootState) => {
    try {
        const stringifiedState = JSON.stringify(state);
        localStorage.setItem('state', stringifiedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedStore = loadState();

const reducer = {
    responses: responsesReducer
}

const store = configureStore({
    reducer,
    devTools: true,
    preloadedState: persistedStore
});

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;