import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '.src/components/Navbar';
import Home from '.src/components/Home';
import Login from '.src/components/Login';
import Register from '.src/components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Навигацията ще е видима на всяка страница */}
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;