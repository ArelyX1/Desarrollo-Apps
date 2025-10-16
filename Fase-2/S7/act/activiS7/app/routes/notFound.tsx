import React from "react";

// Meta para que el navegador muestre título y descripción personalizados
export function meta() {
  return [
    { title: "404 - Página no encontrada" },
    { name: "description", content: "La página solicitada no existe en este sitio." },
  ];
}

const NotFound: React.FC = () => (
  <main style={{ textAlign: "center", marginTop: "3rem" }}>
    <h1>Error 404</h1>
    <p>La página que buscas no existe.</p>
    <img src="/logo-dark.svg" alt="Logo" style={{ width: "120px", margin: "2rem auto" }} />
  </main>
);

export default NotFound;
