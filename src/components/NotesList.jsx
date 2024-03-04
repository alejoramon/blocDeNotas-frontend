import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { deleteNote } from "../services";

import "./NotesList.css";

const BACK_URL = import.meta.env.VITE_BACK_URL;

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useUser();

  const fetchNotes = () => {
    fetch(BACK_URL + "/notas", {
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
      .then(async (data) => {
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
              <strong>Title: {note.title}</strong>
              <p>Detail: {note.detail}</p>
              <p>Category: {note.categoriaName}</p>{" "}
              {/* Mostrar el nombre de la categoría */}
              <div className="note-buttons">
                <div className="note-buttons-wrapper">
                  <Link to={`/show/${note.id}`} className="view-note-btn">
                    See note
                  </Link>
                  <span> | </span>
                  <Link to={`/edit/${note.id}`} className="note-action-btn">
                    Edit
                  </Link>
                  <span> | </span>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteNote(note.id);
                    }}
                    className="remove-btn"
                  >
                    Delete
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
