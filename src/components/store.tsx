import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
    reducer: todoReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// import { createStore } from '@redux/toolkit'
// import rootReducer from './reducers'

// const store = createStore({
//     return rootReducer,
// })

// export default store