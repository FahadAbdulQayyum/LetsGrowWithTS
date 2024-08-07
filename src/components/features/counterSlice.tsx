import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: nanoid(), text: "Hello" }]
    // counter: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment: (state, action) => {
        //     state.counter++;
        // }

        addTodo: (state, action) => {
            state.todos.push({ id: nanoid(), text: action.payload.text });
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    },
})

export const { addTodo, removeTodo } = counterSlice.actions
export default counterSlice.reducer