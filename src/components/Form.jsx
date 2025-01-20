import React, { useEffect, useState } from "react";

const Form = ({ todos, setTodos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const SubmitHandler = (e) => {
     e.preventDefault();
     if(id){
          UpdateTodos(id);
          setId("");
          setTitle("");
          setDescription("");
     }else{
          const obj = {
               id: Math.floor(Math.random() * 100000),
               title: title,
               description: description
          }
          setTodos([...todos, obj]);
          setTitle("");
          setDescription("");
     }
  }

  useEffect(() => {
     if(id) {
          
          const updateData = todos.filter((d) => d.id === id);
          //console.log(updateData);
          setTitle(updateData[0].title)
          setDescription(updateData[0].description)
          
     }
  }, [id])
  const UpdateTodos = () => {
     const obj = {
               title: title,
               description: description
          }
     setTodos((prev) =>
          prev.map((todo) => todo.id === id? {...todo, ...obj}: todo )
)
  }
  return (
    <>
      <form className="container mt-4 d-flex justify-content-center align-items-center gap-4" onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Enter Your Title Here..."
          className="form-control w-25"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Description Here..."
          className="form-control w-25"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
       {!id? <button className="btn btn-outline-primary">Add</button> : <button className="btn btn-outline-info">Edit</button>} 
      </form>
    </>
  );
};

export default Form;
