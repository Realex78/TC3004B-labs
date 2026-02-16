export const UserProfile = () => {
  // Declaración de variables
  const nombreUsuario = "Juan Pérez";
  const rol = "Desarrollador Frontend";
  const fecha = new Date().toLocaleDateString();

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>Perfil de Usuario</h2>
      {/* Uso de variables en el HTML */}
      <ul>
        <li><strong>Nombre:</strong> {nombreUsuario}</li>
        <li><strong>Rol:</strong> {rol}</li>
        <li><strong>Fecha de acceso:</strong> {fecha}</li>
      </ul>
    </div>
  );
};