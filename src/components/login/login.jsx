import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradiente-animado font-sans">
      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-800/20 flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        
        {/* Panel izquierdo */}
        <div className="md:w-1/2 bg-white text-azulmio p-10 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4 leading-tight text-center">
            ¡Bienvenido a <span className="text-moradomio">IncluJob</span>!
          </h2>
          <p className="text-md opacity-100 text-center">
            Tu asistente inteligente para crear hojas de vida inclusivas y efectivas para personas con discapacidad.
          </p>
        </div>

        {/* Panel derecho */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-semibold mb-6 text-azulmio text-center">Iniciar sesión</h2>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azulmio text-azulmio transition-all font-sans"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azulmio text-azulmio transition-all font-sans"
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
    </div>
  );
};

export default Login;
