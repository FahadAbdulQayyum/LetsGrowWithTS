import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./components/todoApp";
import NotFound from "./components/notFound";
import Analytics from "./components/Analytics";

const App = () => {
  return (
    <div>
      {/* <TodoApp /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/todoapp" element={<TodoApp />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
