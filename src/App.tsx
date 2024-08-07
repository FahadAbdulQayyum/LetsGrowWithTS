import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./components/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./components/hooks"

const App = () => {

  // const dispatch = useDispatch()
  // const todoData = useSelector(state => state.todos)

  const dispatch = useAppDispatch();
  const todoData = useAppSelector(state => state.todos)

  const addTodoFunc = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(addTodo({ text: "Let's Play Again!" }))
  }

  return (
    <div>
      count:
      <button onClick={addTodoFunc}>+</button>
      {/* <button>-</button> */}
      {todoData && todoData.map(todo => <>
        <h1>{todo.text}</h1>
      </>)}
    </div>
  )
}

export default App
