import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login.jsx';
import Register from './components/login/register.jsx';
import Inicio from './components/login/Inicio.jsx';
import Chat from './components/login/Chat.jsx';
import Configuracion from './components/login/Configuracion.jsx';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
