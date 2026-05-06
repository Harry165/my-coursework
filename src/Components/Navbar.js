import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert("Излязохте успешно!");
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">MyCoursework</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Начало</Link>
        {user ? (
          <>
            <span className="user-name">Здравей, {user.username}!</span>
            <button className="nav-button" onClick={handleLogout}>Изход</button>
          </>
        ) : (
          <>
            <Link to="/login">Вход</Link>
            <Link to="/register" className="nav-link-special">Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;