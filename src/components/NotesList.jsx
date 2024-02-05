// NotesList.jsx
import React, { useEffect, useState } from "react";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtén el token de autenticación desde el almacenamiento local
    const token = localStorage.getItem("token");

    if (!token) {
      // Manejar el caso en el que el usuario no está autenticado
      console.log("Usuario no autenticado");
      setLoading(false);
      return;
    }

    fetch("http://localhost:4000/api/notes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las notas");
        }
        return response.json();
      })
      .then((data) => {
        // Obtener todas las categorías únicas de las notas
        const uniqueCategories = [
          ...new Set(data.map((note) => note.category)),
        ];
        setCategories(uniqueCategories);
        setNotes(data);
      })
      .catch((error) => console.error("Error fetching notes:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDeleteNote = (noteId) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:4000/api/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar la nota");
        }
        // Actualizar la lista de notas después de la eliminación
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
      })
      .catch((error) => console.error("Error deleting note:", error));
  };

  // Filtrar las notas según la categoría seleccionada
  const filteredNotes = selectedCategory
    ? notes.filter((note) => note.category === selectedCategory)
    : notes;

  if (loading) {
    return <p>Cargando notas...</p>;
  }

  return (
    <div>
      <h2>Notas por Categoría</h2>
      <label htmlFor="category">Selecciona una categoría:</label>
      <select
        id="category"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <strong>Categoría:</strong> {note.category} - {note.content}
            <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
