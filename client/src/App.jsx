import { Routes, Route, useNavigate } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import LoginPage from './components/LoginPage';
import CreationPage from './components/CreationPage';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<FrontPage navigate={navigate} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/creation" element={<CreationPage />} />
    </Routes>
  );
}

export default App;
