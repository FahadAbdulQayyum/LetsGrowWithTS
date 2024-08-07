import { createSlice, nanoid } from '@reduxjs/toolkit';

export type typeTodo = {
    id: string,
    text: string,
}

const initialState = {
    todos: [{ id: nanoid(), text: "Hello" }] as typeTodo[]
}

export const counterSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

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