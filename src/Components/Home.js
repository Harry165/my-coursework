import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Извличаме данните при зареждане на страницата
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Добре дошли в моя проект!</h1>
      <h3>Регистрирани потребители (динамични данни):</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;