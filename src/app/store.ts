import { configureStore } from "@reduxjs/toolkit";
import responsesReducer from "../features/responses/responsesSlice";
import aiFormReducer from "../features/AiForm/aiFormSlice";
import { RootState } from "../utils/interfaces";

const saveState = (state: RootState) => {
    try {
        const stringifiedState = JSON.stringify(state);
        localStorage.setItem('state', stringifiedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

let preloadedState;

const persistedState = localStorage.getItem('state');

if (persistedState) {
    preloadedState = JSON.parse(persistedState)
    
}

const reducer = {
    responses: responsesReducer,
    aiForm: aiFormReducer
}

const store = configureStore({
    reducer,
    devTools: true,
    preloadedState: preloadedState || undefined
});

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})

export default store;