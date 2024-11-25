import React, { useState, useEffect } from "react";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(() => {
    const parsedTodo = localStorage.getItem("todo");
    return parsedTodo ? JSON.parse(parsedTodo) : [];
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const t = title.trim();
    const d = description.trim();

    if (t && d) {
      setTodos((prev) => [...prev, { title: t, description: d }]);
      setDescription("");
      setTitle("");
    } else {
      alert("Title and Description cannot be empty!");
    }
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         minHeight: "100vh",
         background: "white",
        backgroundImage: "url('#')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
        }}
      >
        <h1 style={{textAlign:"center",background:"#ffff",height:"80px",alignContent:"center"}}>TO DO APP</h1>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #ccc",
          }}
        >
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            style={{
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            style={{
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            style={{
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            type="submit"
          >
            Add TODO
          </button>
        </form>

        {/* TODO List */}
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            padding: "10px",
          }}
        >
          {todos.map((todo, index) => (
            <Todo key={index} title={todo.title} description={todo.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
