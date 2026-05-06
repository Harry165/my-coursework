import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h1>Начална страница</h1>
      <p>Добре дошли в моето React приложение!</p>
      <hr style={{ margin: '20px 0', opacity: '0.2' }} />
      <h3>Регистрирани потребители (Динамични данни):</h3>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <strong>{user.username}</strong>
            <span style={{ color: '#666' }}>{user.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;