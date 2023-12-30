import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

interface TestState {
    counter: number,
    name: string
}

const initialState: TestState = {
    counter: 0,
    name: ''
}

const testSlice = createSlice({
    name: 'Test_Slice',
    initialState,
    reducers: {
        incrementCounter: (state: TestState, action: PayloadAction<number>) => {
            state.counter = state.counter + action.payload;
        },
        decrementCounter: (state: TestState, action: PayloadAction<number>) => {
            state.counter = state.counter - action.payload;
        },
        setName: (state: TestState, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const store = configureStore({
    reducer: {
        testReducer: testSlice.reducer
    }
})

export const actions = testSlice.actions;

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;