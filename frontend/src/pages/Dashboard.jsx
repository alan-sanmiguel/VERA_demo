import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>VERA</h1>

      <h2>Bienvenido, {user?.name}</h2>

      <p>
        Rol: <strong>{user?.role}</strong>
      </p>

      <hr />

      <h3>Opciones disponibles</h3>

      <ul>
        <li>Panel de Portafolio</li>
        <li>Planificación</li>
        <li>Trimestres</li>

        {user?.role !== "AUDITOR" && (
          <li>Reportes</li>
        )}

        {(user?.role === "SUPER_ADMIN" ||
          user?.role === "DIRECTOR") && (
          <li>Usuarios</li>
        )}

        {user?.role === "SUPER_ADMIN" && (
          <li>Roles y permisos</li>
        )}
      </ul>

      <button onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;