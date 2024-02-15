import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom"; // Importar Link para el botón
import { deleteNote } from "../services";
import "./NotesList.css"; // Importar el archivo de estilos CSS

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useUser();

  const fetchNotas = () => {
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
        console.log(data.data);
        setNotes(data.data);
      })
      .catch((error) => console.error("Error fetching notes:", error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!user) {
      console.log("Usuario no autenticado");
      setLoading(false);
      return;
    }

    fetchNotas();
  }, [user]);

  const handleDeleteNote = async (id) => {
    console.log("Antes de la llamada a deleteNote");
    const response = await deleteNote(id, user.token);
    console.log("Despues de la llamada a deleteNote");
    fetchNotas();
    console.log("Reponse de deleteNote (data)", response);
  };

  if (loading) {
    return <p>Cargando notas...</p>;
  }

  return (
    <div className="containerMynotes">
      <div className="my-notes-header">
        <h2>My notes</h2>
        <Link to="/create" className="new-note-btn">
          New Note
        </Link>{" "}
        {/* Botón para crear una nueva nota */}
      </div>
      <div className="note-container">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note">
              <strong>{note.title}</strong>
              <br />
              Categoria.
              {note.categoriaId}
              <br />
              {note.text}
              <div className="note-buttons">
                <div className="note-buttons-wrapper">
                  <Link to={`/edit/${note.id}`}>Edit</Link>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteNote(note.id);
                    }}
                  >
                    Remove
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No tienes ninguna nota</div>
        )}
      </div>
    </div>
  );
};

export default NotesList;
