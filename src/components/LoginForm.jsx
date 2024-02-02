// LoginForm.jsx
import React, { useState } from "react";
import "./LoginForm.css"; // Importa el archivo de estilo

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Aquí puedes manejar la lógica de éxito, como redireccionar a otra página
        console.log("Inicio de sesión exitoso");
      } else {
        // Aquí puedes manejar la lógica de error, como mostrar un mensaje al usuario
        console.error("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;
