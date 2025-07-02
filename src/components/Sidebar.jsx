import React from "react";
import "../Sidebar.css";

const Sidebar = ({ isLoggedIn, onSelectBoard }) => {
  // Ejemplo de tableros disponibles
  const dashboards = [
    {
      id: 1,
      name: "Herrera",
      url: "https://app.powerbi.com/view?r=eyJrIjoiZjUzMGFlNGUtZGEyNi00ODFlLWEzMTAtODYzNTAzZTQ5NjVlIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 2,
      name: "Ensalud",
      url: "https://app.powerbi.com/view?r=eyJrIjoiM2Q0YWZiMmQtZmJkYi00OWI4LWJkMTYtZjZjMzBlYzQxN2U1IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 3,
      name: "Bomberos",
      url: "https://app.powerbi.com/view?r=eyJrIjoiM2Y0MTg5YTItY2NhOC00MDJiLWI4YzAtY2VlZmMyZjc3NjQ4IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 4,
      name: "Click",
      url: "https://app.powerbi.com/view?r=eyJrIjoiODBlMmIzNWEtN2Y1OC00MWYyLTg2NWQtODQ3ZDQ0ZDUwNzUzIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 5,
      name: "Mar 10",
      url: "https://app.powerbi.com/view?r=eyJrIjoiZGYzZGQ2YzMtMTNiNy00YmNlLWJlNTMtMTI5MjRlN2VhYjg3IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 6,
      name: "Cedeño",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTcwNWM1YWItN2EyMi00MzlhLTkwYTQtMzFiZDY4ZTZmMDE0IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 7,
      name: "ConstruCasa",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNzhiMDE0ZDMtZjMxMS00Y2UzLWIzOWMtYzQzNTdjNjQzNDc4IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 8,
      name: "Edem",
      url: "https://app.powerbi.com/view?r=eyJrIjoiY2ZkMzMyMzAtMGE2NC00MjMwLTg4OTUtMzA2YWQ2NmI4NTNjIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 9,
      name: "Op. de Vida",
      url: "https://app.powerbi.com/view?r=eyJrIjoiODg4OWQyNGYtYzcxMi00OGU3LTliZGUtMTkwOGU0ZjM0OWI3IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 10,
      name: "Global",
      url: "https://app.powerbi.com/view?r=eyJrIjoiZGZjMGM0NjUtNDgzOS00NjgzLWIwYTQtOWFiZTdkZjA5YjA5IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 11,
      name: "Juan Crisostomo",
      url: "https://app.powerbi.com/view?r=eyJrIjoiYmY1MWYyNjAtMzllMS00MjVhLWFkNTAtNzEzMTA0Zjk2ODdmIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 12,
      name: "Productos JyC",
      url: "https://app.powerbi.com/view?r=eyJrIjoiY2IyNTczNjEtNTAwNS00NThkLWFmZDctMzY5ZDMyMDMxNjk4IiwidCI6IjY1OWZkNTU3LTAyMTUtNGI2Yy1hNjQ4LTVhYWEwMmVmMWJlNiIsImMiOjR9",
    },
    {
      id: 13,
      name: "Rfast",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTkxNjVmMzUtMjZlNi00Yzg4LWE4YTMtOGNjMTQwYjhmZmI0IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 14,
      name: "Carnes Sebastian",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNmMwOWNjZjAtYWRkNC00MWUzLThiZjctYjg0ODE1N2ViOGUxIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 15,
      name: "Ip Salud",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMGQwYTM0OGItZDRiYS00NWQ1LTk2NjQtZTZhNjdlOWIzNzJhIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 16,
      name: "San Augustin",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOWI0NWNjMjItMjdlOC00NTg1LWE4NWEtNWFmNzY5N2ZmNmRjIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 17,
      name: "Industria Textil",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNDFlOTU3YzMtNmE1Yy00MzFjLTg2MzktM2U3MDE5NTUyMjI5IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 18,
      name: "Imago",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTU5ZDA0NGMtMWZkNC00ZDkwLWJmMWItNGUyMGU5YzJmNzU0IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 19,
      name: "SkinLook",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNzM5NzBjNTYtMDkyNy00MGNiLTljYzQtOGZmMTZiNTBkNDIwIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 20,
      name: "Inversiones Tatiana",
      url: "https://app.powerbi.com/view?r=eyJrIjoiYTE3N2Q5N2UtYWRkMy00YjY1LWFlMjMtOTU4MTI2OTc0ZmM4IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 21,
      name: "Pluss Dent",
      url: "https://app.powerbi.com/view?r=eyJrIjoiOTI4YjFkNDYtNTdiNi00NWFjLWFjOTUtODVkODAzMjY2OTY1IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 22,
      name: "Ikki Gastrobar",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNWY2NTZkZjktYjA3NC00NWNiLThiYmQtNzBjZGI2MzFkZTkzIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 23,
      name: "Red Norte",
      url: "https://app.powerbi.com/view?r=eyJrIjoiZDYwYTBjZTEtZDZlZi00YzQ3LTk4ODItNTUyMWQ4NTBhYTNjIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
    {
      id: 24,
      name: "Medcol",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNzkzNGVhODAtN2E1NS00YTg4LTg3NmQtMGZlMDA5NTIxNjQxIiwidCI6IjY1OWZkNTU3LTAyMTUtNGI2Yy1hNjQ4LTVhYWEwMmVmMWJlNiIsImMiOjR9",
    },
    {
      id: 25,
      name: "Vitalia",
      url: "https://app.powerbi.com/view?r=eyJrIjoiZDNhNThkNTUtOWM1ZC00Yjg0LTg4ZjMtODVlMzQ0ODg0MTBjIiwidCI6IjY1OWZkNTU3LTAyMTUtNGI2Yy1hNjQ4LTVhYWEwMmVmMWJlNiIsImMiOjR9",
    },
    {
      id: 26,
      name: "Hesego",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNDIzMTFiMjUtZjM4ZS00YjUxLTk0MjctNzAzMTQwNTUwYzA1IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9",
    },
  ];

  return (
    <aside className="sidebar">
      <h2>Tableros</h2>
      <nav className={`sidebar-nav ${!isLoggedIn ? "disabled" : ""}`}>
        {dashboards.map((dashboard) => (
          <button
            key={dashboard.id}
            onClick={() => onSelectBoard(dashboard)}
            disabled={!isLoggedIn}
          >
            {dashboard.name}
          </button>
        ))}
      </nav>
      {!isLoggedIn && (
        <div className="login-message">
          Inicie sesión para acceder a los tableros
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
