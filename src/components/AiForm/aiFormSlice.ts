import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const promptComparison = (prompt: string, preset: string) => {
    return prompt.split("") === preset.split("");
}

const aiFormSlice = createSlice({
    name: 'aiForm',
    initialState: {
        prompt: "",
        promptRequired: false,
        engine: "",
        engineRequired: false,
        preset: ""
    },
    reducers: {
        changePrompt: (state, action) => {
            state.prompt = action.payload;
            state.promptRequired = false;
            if (!promptComparison(state.prompt, state.preset)) state.preset = "";
        },
        changeEngine: (state, action) => {
            state.engine = action.payload;
            state.engineRequired = false;
        },
        changePreset: (state, action) => {
            state.prompt = action.payload;
            state.promptRequired = false;
            state.preset = action.payload
        },
        togglePrompt: (state, action) => {
            state.promptRequired = action.payload;
        },
        toggleEngine: (state, action) => {
            state.engineRequired = action.payload;
        }
    }
});

export const selectPrompt = (state: RootState) => state.aiForm.prompt;

export const selectEngine = (state: RootState) => state.aiForm.engine;

export const selectPreset = (state: RootState) => state.aiForm.preset;

export const promptRequired = (state: RootState) => state.aiForm.promptRequired;

export const engineRequired = (state: RootState) => state.aiForm.engineRequired;

export const { changePrompt, changeEngine, changePreset, togglePrompt, toggleEngine  } = aiFormSlice.actions;

export default aiFormSlice.reducer;