import { useState } from "react";
import { registerUserService } from "../services"; // Importa la función registerUserService
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await registerUserService({ userName, email, password }); // Llama a la función registerUserService con los datos del formulario
      // Aquí puedes redirigir al usuario a la página de éxito o a donde desees
      console.log("Usuario registrado exitosamente");
      // Limpiar los campos del formulario después del registro exitoso
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/notes");
    } catch (error) {
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
      </form>
    </section>
  );
};

export default CreateUser; // Exporta el componente CreateUser
