import React from 'react';
import '../Sidebar.css';

const Sidebar = ({ isLoggedIn, onSelectBoard }) => {
  // Ejemplo de tableros disponibles
  const dashboards = [
    { id: 1, name: 'Herrera', url: 'https://app.powerbi.com/view?r=eyJrIjoiM2EyZTk1M2UtODk1OC00ZjAyLTkxNWQtMTQxNzQwZjg1NWZkIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 2, name: 'Ensalud', url: 'https://app.powerbi.com/view?r=eyJrIjoiMzdkMzExM2MtNDE5Ni00ZThmLWFiMjMtMDY4NTJhZTM2YTcxIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 3, name: 'Bomberos', url: 'https://app.powerbi.com/view?r=eyJrIjoiYjkwNjE5YTktZjdlOC00YjZlLWFkYzctNzJlNDcxYjE5NzAzIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 4, name: 'Click', url: 'https://app.powerbi.com/view?r=eyJrIjoiY2IwM2MzNTctZTQ0Ni00MzhkLThmNTYtMzhjYjk4NWIwY2RhIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 5, name: 'Mar 10', url: 'https://app.powerbi.com/view?r=eyJrIjoiYTljNTFjNzktMzM1ZS00N2I3LTlhYTQtM2EyZDYwMjZhYmI3IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 6, name: 'Cedeño', url: 'https://app.powerbi.com/view?r=eyJrIjoiZDdiYWYyMTItMjQ4OC00YjczLTg2NTctNmYyMDEzODAwMTQ4IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 7, name: 'ConstruCasa', url: 'https://app.powerbi.com/view?r=eyJrIjoiNTA5ZWNmYzYtOWRjNi00NzZiLWIxNjUtZDhjMWRkYTRmZmZiIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 8, name: 'Edem', url: 'https://app.powerbi.com/view?r=eyJrIjoiZGE4ODk1MzQtMzIxMC00ODA5LTg3ZDMtYWM2NDEzMDE3MjEyIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 9, name: 'Op. de Vida', url: 'https://app.powerbi.com/view?r=eyJrIjoiNTYyOTE1ZWQtZTRhZi00ODJjLThmNjYtNWZlMjVlMjdiMWY5IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 10, name: 'Global', url: 'https://app.powerbi.com/view?r=eyJrIjoiN2JiOGU4ODctNWJkYy00ZmNkLTk4ZjMtNWU3ZTBjM2E0ODY4IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 11, name: 'Juan Crisostomo', url: 'https://app.powerbi.com/view?r=eyJrIjoiNDljNjllODItMGQ2ZS00ZDZkLWJmMDgtMzBhYjZlNzdhYmVhIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 12, name: 'Productos JyC', url: 'https://app.powerbi.com/view?r=eyJrIjoiMDhlY2QwOTEtYmY3MC00Y2Y1LWI2OTAtNTQ3Y2FhZTU4OTU1IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 13, name: 'Rfast', url: 'https://app.powerbi.com/view?r=eyJrIjoiODc3OWQ5MDYtYTQ0Ni00YWM5LTljZDItYjcwODdjMWIzNDVjIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 14, name: 'Carnes Sebastian', url: 'https://app.powerbi.com/view?r=eyJrIjoiNjdlNzdlOGQtNzFhYy00N2Q5LTlkYzUtN2I0MDUwZWIwNWM1IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 15, name: 'Ip Salud', url: 'https://app.powerbi.com/view?r=eyJrIjoiM2YxNDlhY2UtNjUzNy00OTIxLTk4Y2ItYmRkNjI4NzRjZDMwIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 16, name: 'San Augustin', url: 'https://app.powerbi.com/view?r=eyJrIjoiOTE5ZjQ4OGItY2ZhZC00YjA5LWIxOWItNDhiNjAyYTQ2MmYzIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 17, name: 'Industria Textil', url: 'https://app.powerbi.com/view?r=eyJrIjoiNDFlOTU3YzMtNmE1Yy00MzFjLTg2MzktM2U3MDE5NTUyMjI5IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 18, name: 'Imago', url: 'https://app.powerbi.com/view?r=eyJrIjoiMTc4NzIyNWEtM2EyNy00NTE5LTgwNWYtZGI5ZmZiOGExYmQzIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 19, name: 'SkinLook', url: 'https://app.powerbi.com/view?r=eyJrIjoiNzYxODA3ZDUtMmUzMC00NjdlLWI5MjktMmU2OWM0NzczOWM0IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 20, name: 'Inversiones Tatiana', url: 'https://app.powerbi.com/view?r=eyJrIjoiZDczMWFlMzMtOGVkYy00YzgzLWJjMzUtZmE0MjRjYWJmMDU1IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 21, name: 'Pluss Dent', url: 'https://app.powerbi.com/view?r=eyJrIjoiODdjMmI3MjQtMTIzOS00ZjAwLWIyYmYtYjhmYzc4MGFhMDVhIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 22, name: 'Ikki Gastrobar', url: 'https://app.powerbi.com/view?r=eyJrIjoiMWYxN2IxNGQtOGU0Yy00N2JlLWIxYmQtNmVhODE1NmQwMjRlIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 23, name: 'Red Norte', url: 'https://app.powerbi.com/view?r=eyJrIjoiZWYxNzkxMGUtZDIwYy00OWUxLWI0NzItY2M0YWQ3YTdhM2M1IiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 24, name: 'Medcol', url: 'https://app.powerbi.com/view?r=eyJrIjoiNzkwYjhiYWYtZTZhYi00ZmQwLWE3NTAtMTQ2MmEwMWViOTRhIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
    { id: 25, name: 'Hesego', url: 'https://app.powerbi.com/view?r=eyJrIjoiMTI0NWY1YjItNDBlMC00NzQ0LWFiMGUtN2ZlNDE2MzkzZTliIiwidCI6IjQ5YTRkYjliLWY4OTMtNGMxZi04Y2FiLTFiOWJkNzc1YWJkYiIsImMiOjR9' },
  ];
  
  return (
    <aside className="sidebar">
      <h2>Tableros</h2>
      <nav className={`sidebar-nav ${!isLoggedIn ? 'disabled' : ''}`}>
        {dashboards.map(dashboard => (
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