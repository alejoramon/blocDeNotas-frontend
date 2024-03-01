import React, { useEffect, useState } from "react";
import { getNoteById } from "../services/index";
import { useUser } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";

function NoteShow() {
  const { noteId } = useParams();
  const [noteData, setNoteData] = useState({});
  const [user] = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await getNoteById(user.token, noteId);
        setNoteData(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    fetchNote();
  }, [user.token, noteId]);

  const handleExit = () => {
    navigate("/notes");
  };

  return (
    <div>
      <h1>Note Details</h1>
      <p>Title: {noteData.title}</p>
      <p>Detail: {noteData.detail}</p>
      <p>Text: {noteData.text}</p>
      <p>Category ID: {noteData.categoriaId}</p>
      <button onClick={handleExit}>Exit</button>
    </div>
  );
}

export default NoteShow;
