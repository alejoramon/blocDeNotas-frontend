// CreateNote.jsx
import React, { useState } from "react";
import { createNote } from "../services/index";

function CreateNote() {
  const [noteData, setNoteData] = useState({
    title: "",
    detail: "",
    text: "",
    categoriaId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createNote(noteData);

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
        <input
          type="text"
          name="title"
          value={noteData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Detalle:
        <input
          type="text"
          name="detail"
          value={noteData.detail}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Texto:
        <textarea name="text" value={noteData.text} onChange={handleChange} />
      </label>
      <br />
      <label>
        Categoría ID:
        <input
          type="text"
          name="categoriaId"
          value={noteData.categoriaId}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Crear Nota</button>
    </form>
  );
}

export default CreateNote;
