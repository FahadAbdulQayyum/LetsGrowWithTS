import './App.css'
import { useState } from "react";
import { addTodo, removeTodo } from "./components/features/todoSlice"
import { useAppDispatch, useAppSelector } from "./components/hooks"

const App = () => {

  // const [input, setInput] = useState<typeTodo>({})
  // const [input, setInput] = useState({})
  const [input, setInput] = useState("")

  const dispatch = useAppDispatch();
  const todoData = useAppSelector(state => state.todos)

  const addTodoFunc = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    // dispatch(addTodo({ text: "Let's Play Again!" }))
    dispatch(addTodo({ text: input }))
    setInput("")
  }

  // const removeTodoFunc = (e: React.MouseEvent<HTMLElement>) => {
  const removeTodoFunc = (id: string) => {
    dispatch(removeTodo(id))
  }

  return (
    <div className="center">
      <input placeholder="Enter your todo here...." value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodoFunc}>Add</button>
      <br />
      <div className="internal">
        {todoData && todoData.map(todo => <div>
          <span className='inline'><h3>{todo.text}</h3><button onClick={() => removeTodoFunc(todo.id)}>X</button></span>
        </div>)}
      </div>
    </div >
  )
}

export default App
