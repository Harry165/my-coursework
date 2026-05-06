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
    <div style={{ padding: '20px' }}>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Потребителско име:</label><br/>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Имейл:</label><br/>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Парола:</label><br/>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br/>
        <button type="submit">Регистрирай се</button>
      </form>
    </div>
  );
};

export default Register;