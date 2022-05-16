import store from "../app/store"

export interface IAiResponse {
    id: string
    createdAt: number
    prompt: string
    response: string
}

export interface AsyncPromptRequest {
    engine: string
    prompt: string
}

export interface ResponseProps {
    responseItem: IAiResponse
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;