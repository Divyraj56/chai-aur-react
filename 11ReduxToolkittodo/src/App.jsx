// step 1 - install rtk and redux from website
// step 2 - create src-app-store.js
// step 3 -  import { configureStore, Tuple } from '@reduxjs/toolkit' there
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"



function App() {

  return (
    <>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
