import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  // Проверяваме дали има запис 'user' в localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user'); // Изтриваме потребителя
    alert("Излязохте успешно!");
    navigate('/login'); // Пренасочваме към входа
  };

  return (
    <nav style={{ padding: '15px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ marginRight: '15px' }}>Начало</Link>
      </div>
      <div>
        {user ? (
          // Ако потребителят е влязъл, показваме името му и бутон Изход
          <>
            <span style={{ marginRight: '15px' }}>Здравей, {user.username}!</span>
            <button onClick={handleLogout} style={{ cursor: 'pointer' }}>Изход</button>
          </>
        ) : (
          // Ако не е влязъл, показваме опциите за вход/регистрация
          <>
            <Link to="/login" style={{ marginRight: '15px' }}>Вход</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;