import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí normalmente verificarías las credenciales con tu backend
    // Por ahora, simularemos un inicio de sesión exitoso
    console.log('Iniciando sesión con:', credentials);
    
    // Mostrar el modal después de iniciar sesión
    setShowModal(true);
  };

  const handleConfigureProfile = () => {
    setShowModal(false);
    navigate('/configuracion');
  };

  const handleExploreApp = () => {
    setShowModal(false);
    navigate('/inicio');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradiente-animado font-sans">
      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-800/20 flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        
        {/* Panel izquierdo */}
        <div className="md:w-1/2 bg-white text-azulmio p-10 flex flex-col justify-center items-center">
          <img
            src="/inklufnd.png"
            alt="Logo InKlúIA"
            className="w-28 h-28 mb-4 animate-bounce"
          />
          <h2 className="text-4xl font-bold mb-4 leading-tight text-center">
            ¡Bienvenido a <span className="bg-gradient-to-r from-azulmio to-moradomio text-transparent bg-clip-text">InKlú-IA</span>!
          </h2>
          <p className="text-md opacity-100 text-center">
            Tu asistente para crear hojas de vida para personas con discapacidad.
          </p>
        </div>

        {/* Panel derecho */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-semibold mb-6 text-azulmio text-center">Iniciar sesión</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={credentials.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azulmio text-azulmio transition-all font-sans"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={credentials.password}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azulmio text-azulmio transition-all font-sans"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-azulmio to-moradomio text-white font-semibold py-3 rounded-md hover:from-[#153C62] hover:to-[#a97be0] transition duration-300 shadow-lg font-sans transform hover:-translate-y-1"
            >
              Ingresar
            </button>
            <p className="text-sm text-center text-gray-600 mt-4 font-sans">
              ¿No tienes cuenta?{' '}
              <Link to="/registro" className="text-azulmio font-medium hover:underline transition-all">Regístrate</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Modal que aparece después del inicio de sesión */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-azulmio mb-4">¡Bienvenido a InKlú-IA!</h2>
              <p className="text-gray-600 mb-6">
                Para mejorar tu experiencia de usuario, configura primero tu perfil. Esto nos ayudará a adaptar la aplicación a tus necesidades y a asegurarnos de que sacas el máximo partido a nuestras funciones.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleConfigureProfile}
                  className="bg-gradient-to-r from-azulmio to-moradomio text-white font-semibold py-2 px-4 rounded-md text-center hover:brightness-110 transition shadow-lg"
                >
                  Configurar perfil
                </button>
                <button
                  onClick={handleExploreApp}
                  className="border border-azulmio text-azulmio font-semibold py-2 px-4 rounded-md hover:bg-azulmio hover:text-white transition"
                >
                  Explorar aplicación
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
