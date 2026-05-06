import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ margin: '10px' }}>Начало</Link>
      <Link to="/login" style={{ margin: '10px' }}>Вход</Link>
      <Link to="/register" style={{ margin: '10px' }}>Регистрация</Link>
    </nav>
  );
};

export default Navbar;