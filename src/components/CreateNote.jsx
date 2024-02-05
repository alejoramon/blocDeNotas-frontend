// CreateNote.jsx
import React, { useState } from "react";
// import "./CreateNote.css";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        console.log("Nota creada exitosamente");
      } else {
        console.error("Error al crear la nota");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Contenido:
        <textarea value={content} onChange={handleContentChange} />
      </label>
      <br />
      <button type="submit">Crear Nota</button>
    </form>
  );
}

export default CreateNote;
