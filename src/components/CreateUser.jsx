import React, { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Nuevo estado para el mensaje de registro exitoso

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      // Llama a la función registerUserService con los datos del formulario
      await registerUserService({ userName, email, password });

      // Almacena el nombre de usuario registrado con éxito en el estado
      setSuccessMessage(`Registered successfully as ${userName}`); // Establece el mensaje de registro exitoso

      // Limpiar los campos del formulario después del registro exitoso
      setUserName("");
      setEmail("");
      setPassword("");

      // Espera un segundo antes de redirigir al usuario
      setTimeout(() => {
        // Redirige al usuario a la página de inicio de sesión después de un registro exitoso
        navigate("/login");
      }, 1000);
    } catch (error) {
      // Si ocurre un error, establece el estado de error para mostrar un mensaje al usuario
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
        {/* Muestra el mensaje de error si hay algún error */}
        {successMessage && <p>{successMessage}</p>}
        {/* Muestra el mensaje de registro exitoso si hay uno */}
      </form>
    </section>
  );
};

export default CreateUser;
