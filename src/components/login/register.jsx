import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
    confirm: '',
    country: 'COL+57',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'phone' ? value.replace(/\D/g, '') : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.phone || !form.password || !form.confirm) {
      return setError('Completa todos los campos.');
    }
    if (!acceptedTerms) {
      return setError('Debes aceptar los términos y condiciones.');
    }
    if (form.password !== form.confirm) {
      return setError('Las contraseñas no coinciden.');
    }
    setError('');
    // Aquí va la lógica del registro
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradiente-animado font-sans">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-0 flex flex-col items-center">
        <img
          src="/inklufnd.png"
          alt="Logo InKlúIA"
          className="w-24 h-24 mt-2 mb-0 animate-bounce"
        />
        <h2 className="text-3xl font-semibold mb-6 text-azulmio text-center">Registro</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Correo */}
          <div className="relative">
            <EnvelopeIcon className="w-5 h-5 absolute left-3 top-3.5 text-moradomio" />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="pl-10 p-3 border border-gray-300 rounded-md w-full   text-azulmio"
            />
          </div>

          {/* Teléfono */}
          <div className="flex">
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="px-3 py-3 bg-white text-sm rounded-l-md border border-r-0 border-gray-300 text-azulmio"
            >
              <option value="COL+57">COL+57</option>
              <option value="MEX+52">MEX+52</option>
              <option value="ARG+54">ARG+54</option>
              <option value="PER+51">PER+51</option>
              <option value="CHL+56">CHL+56</option>
              <option value="ECU+593">ECU+593</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Número de teléfono"
              value={form.phone}
              onChange={handleChange}
              className="p-3 w-full border border-gray-300 rounded-r-md text-azulmio"
            />
          </div>

          {/* Contraseña */}
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 absolute left-3 top-3.5 text-moradomio" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              className="pl-10 pr-10 p-3 border border-gray-300 rounded-md w-full text-azulmio"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-moradomio"
            >
              {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* Confirmar contraseña */}
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 absolute left-3 top-3.5 text-moradomio" />
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirm"
              placeholder="Confirmar contraseña"
              value={form.confirm}
              onChange={handleChange}
              className="pl-10 pr-10 p-3 border border-gray-300 rounded-md w-full text-azulmio"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3.5 text-moradomio"
            >
              {showConfirm ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* Términos */}
          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={e => setAcceptedTerms(e.target.checked)}
              className="mt-1 accent-moradomio"
            />
            <span>
              Acepto los <a href="#" className="text-moradomio hover:underline">términos</a> y la{' '}
              <a href="#" className="text-moradomio hover:underline">política de privacidad</a>.
            </span>
          </label>

          {/* Error */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-azulmio to-moradomio text-white font-semibold py-3 rounded-md hover:brightness-110 transition shadow-lg"
          >
            Registrarte
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            ¿Ya tienes cuenta?{' '}
            <Link to="/" className="text-azulmio font-medium hover:underline">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
