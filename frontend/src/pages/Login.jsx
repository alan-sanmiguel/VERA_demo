import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(username, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo-box">
          <span className="logo-v">V</span>
          <span className="logo-check">✓</span>
        </div>

        <h1>VERA</h1>

        <p className="brand-line">
          VERIFICACIÓN · EVIDENCIA · RIESGO · AUDITORÍA
        </p>

        <p className="subtitle">
          Plataforma de auditoría interna
        </p>

        <p className="login-message">
          Inicia sesión para acceder al portafolio y a tus auditorías.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Usuario</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
          />

          <label>Contraseña</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            Iniciar sesión
          </button>
        </form>

        <p className="create-account">
          ¿Primera vez en VERA? <strong>Crear cuenta</strong>
        </p>
      </div>
    </div>
  );
}

export default Login;