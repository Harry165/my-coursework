import { useState } from 'react';

const Register = () => {
    //hook
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Изпращаме POST заявка към нашия JSON сървър
  const response = await fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Регистрацията е успешна и записана в db.json!");
    setFormData({ username: '', email: '', password: '' }); // Изчистваме формата
  } else {
    alert("Грешка при регистрацията.");
  }
};

  return (
  <div className="container">
    <h2>Регистрация</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Потребителско име" value={formData.username} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Имейл" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Парола" value={formData.password} onChange={handleChange} required />
      <button type="submit" className="main-button">Създай акаунт</button>
    </form>
  </div>
);
};

export default Register;