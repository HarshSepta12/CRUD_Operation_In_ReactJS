import React, { useState } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1,
      title: "Excersice",
      description: "It's a good Habit for health"
    },
    {id: 2,
      title: "Walking",
      description: "It's reduce a unnecessary fat from body"
    }
  ])
  const [id, setId] = useState("");
  //console.log(id);
  const deleteTodos = (id) => {
    setTodos(todos.filter((d) => d.id != id))
  }
  
  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bolder">Simple CRUD Operation</h1>
        <Form todos={todos} setTodos={setTodos} id={id} setId={setId}/>
        <Todos todos={todos} setId={setId} deleteTodos={deleteTodos}/>
      </div>
    </>
  )
}

export default App
