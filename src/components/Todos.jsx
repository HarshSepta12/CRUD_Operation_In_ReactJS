import React from 'react'

const Todos = ({todos, id, setId, deleteTodos}) => {
  return (
    <>
      <div className="container mt-4">
      <table className="table table-dark text-center">
  <thead>
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {todos?.map((d) => {
  return (
    <tr key={d.id}>
      <td>{d.title}</td>
      <td>{d.description}</td>
      <td>
        <button className="btn btn-outline-info mx-4" onClick={() => setId(d.id)}>Edit</button>
        <button className="btn btn-outline-danger" onClick={() => deleteTodos(d.id) }>Delete</button>
      </td>
    </tr>
  );
})}


  </tbody>
</table>
      </div>
    </>
  )
}

export default Todos
