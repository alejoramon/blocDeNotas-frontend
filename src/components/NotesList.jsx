import React, { useEffect, useState } from "react";
import "./NotesList.css"; // Importar el archivo de estilos CSS
import { useUser } from "../context/UserContext";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useUser();

  useEffect(() => {
    if (!user) {
      // Manejar el caso en el que el usuario no está autenticado
      console.log("Usuario no autenticado");
      setLoading(false);
      return;
    }

    fetch("http://localhost:4000/notas", {
      headers: {
        Authorization: `${user.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las notas");
        }
        return response.json();
      })
      .then((data) => {
        setNotes(data.data);
      })
      .catch((error) => console.error("Error fetching notes:", error))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) {
    return <p>Cargando notas...</p>;
  }

  return (
    <div className="container">
      <h2>Aquí tienes todas tus notas</h2>
      <div className="note-container">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <strong>Título:</strong> {note.title} <br />
            <strong>Detalle:</strong> {note.detail} <br />
            <strong>Texto:</strong> {note.text} <br />
            <strong>Categoría ID:</strong> {note.categoriaId} <br />
            <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
