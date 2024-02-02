// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const notasNoEditables = [
    { id: 1, contenido: "Nota 1" },
    { id: 2, contenido: "Nota 2" },
    // ... más notas
  ];

  return (
    <div className="container">
      <h1>Bienvenido a la Aplicación de Notas</h1>
      <div className="content">
        <p>
          "Optimiza tu productividad con AppDeNotas. La herramienta esencial
          para dominar tu trabajo y organizar tu vida. Ya sea en tu escritorio o
          dispositivo móvil, esta aplicación eficiente gestiona tanto tu trabajo
          como tu vida cotidiana". Si aún no tienes una cuenta, puedes{" "}
          <Link to="/user">registrarte</Link>.
        </p>
      </div>
      <h2>Notas Recientes</h2>
      <ul>
        {notasNoEditables.map((nota) => (
          <li key={nota.id}>{nota.contenido}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
