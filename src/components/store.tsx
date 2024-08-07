import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/features/counterSlice";

export const store = configureStore({
    reducer: counterReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// import { createStore } from '@redux/toolkit'
// import rootReducer from './reducers'

// const store = createStore({
//     return rootReducer,
// })

// export default store