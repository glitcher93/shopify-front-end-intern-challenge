import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

export interface IAiResponse {
    id: string
    createdAt: number
    prompt: string
    response: string
}

export const postPromptForResponse = createAsyncThunk('responses/postPromptForResponse', async (prompt: string) => {
    const requestBody = {
        prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    }

    const headers = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_OPENAI_SECRET}`
        }
    }

    const { data } = await axios.post("https://api.openai.com/v1/engines/text-curie-001/completions", requestBody, headers);

    const { id, created, choices } = data; 
    
    const aiResponse = {
        id,
        createdAt: created, 
        prompt,
        response: choices[0].text
    }

    return aiResponse;
})



const responsesSlice = createSlice({
    name: 'responses',
    initialState: {
        aiResponses: [] as IAiResponse[],
        postPromptPending: false,
        failedToPostPrompt: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postPromptForResponse.pending, (state, action) => {
                state.postPromptPending = true;
                state.failedToPostPrompt = false;
            })
            .addCase(postPromptForResponse.fulfilled, (state, action) => {
                const { payload } = action;
                state.postPromptPending = false;
                state.failedToPostPrompt = false;
                state.aiResponses.push(payload)
            })
            .addCase(postPromptForResponse.rejected, (state, action) => {
                state.postPromptPending = false;
                state.failedToPostPrompt = true;
            })
    }
});

export const selectResponses = (state: RootState) => state.responses.aiResponses;

export default responsesSlice.reducer;

