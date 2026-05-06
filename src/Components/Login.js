import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // За пренасочване след успех

  const handleLogin = async (e) => {
    e.preventDefault();

    // Правим GET заявка, за да намерим потребител с този имейл и парола
    const response = await fetch(`http://localhost:8000/users?email=${email}&password=${password}`);
    const data = await response.json();

    if (data.length > 0) {
        alert("Влизането е успешно!");
        // Запазваме информация, че потребителят е влязъл (базова автентикация)
        localStorage.setItem('user', JSON.stringify(data[0]));
        navigate('/'); // Пренасочваме към началната страница
    } else {
        alert("Грешен имейл или парола!");
    }
  };

  return (
  <div className="container">
    <h2>Вход</h2>
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Имейл" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Парола" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className="main-button">Влез</button>
    </form>
  </div>
);
};

export default Login;