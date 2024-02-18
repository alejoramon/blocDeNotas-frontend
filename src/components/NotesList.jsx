import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { deleteNote } from "../services";
import "./NotesList.css";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useUser();

  const fetchNotes = () => {
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

    fetchNotes();
  }, [user]);

  const handleDeleteNote = async (id) => {
    console.log("Antes de la llamada a deleteNote");
    const response = await deleteNote(id, user.token);
    console.log("Después de la llamada a deleteNote");
    fetchNotes();
    console.log("Respuesta de deleteNote (data)", response);
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
        </Link>
      </div>
      <div className="note-container">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div key={note.id} className="note">
              <strong>{note.title}</strong>
              <br />
              <span>Categoria: {note.categoriaId}</span>{" "}
              {/* Mostrar la categoriaId aquí */}
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
                    className="remove-btn"
                  >
                    Remove
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-note">Por ahora no tenemos ninguna nota</div>
        )}
      </div>
    </div>
  );
};

export default NotesList;
