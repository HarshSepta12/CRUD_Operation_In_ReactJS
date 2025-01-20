import React, { useState } from 'react'
import Form from './components/Form'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1,
      title: "Ram",
      description: "My God"
    },
    {id: 2,
      title: "Krishna",
      description: "Also My God"
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
