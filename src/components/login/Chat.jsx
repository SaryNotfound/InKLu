import React, { useState, useRef, useEffect } from 'react';
import Header from './header';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../../contexts/ThemeContext';

const Chat = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: '¡Hola! Soy Inklú-IA, tu asistente personal para crear hojas de vida basado en tus habilidades. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sugerencias de preguntas para el usuario
  const sugerencias = [
    "¿Cómo hacer una hoja de vida?",
    "¿Qué es una nómina?",
    "¿Cuáles son mis derechos laborales?",
    "Ayúdame a redactar una carta de presentación"
  ];

  // Autoscroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simular respuesta de la IA
  const simulateResponse = (userMessage) => {
    setIsTyping(true);
    
    // Respuestas predefinidas basadas en palabras clave
    let botResponse = '';
    
    if (userMessage.toLowerCase().includes('hoja de vida') || userMessage.toLowerCase().includes('curriculum')) {
      botResponse = 'Para crear una hoja de vida, es importante destacar tus habilidades y competencias por encima de posibles limitaciones. Incluye una sección de "Adaptaciones" donde menciones los ajustes que necesitas para desempeñar tu trabajo de manera óptima. ¿Te gustaría que te ayude a crear una sección específica de tu CV?';
    } 
    else if (userMessage.toLowerCase().includes('nómina')) {
      botResponse = 'Una nómina es un documento que refleja el pago que recibe un trabajador por sus servicios, incluyendo el salario base, deducciones y beneficios. En el caso de personas con discapacidad, pueden existir beneficios fiscales tanto para el empleado como para el empleador. ¿Necesitas información más específica sobre algún aspecto de la nómina?';
    }
    else if (userMessage.toLowerCase().includes('derechos laborales')) {
      botResponse = 'Las personas con discapacidad tienen garantizados los mismos derechos laborales que cualquier trabajador, además de protecciones adicionales como el derecho a ajustes razonables en el lugar de trabajo, protección contra la discriminación, y en algunos casos, cuotas de empleo en empresas. ¿Hay algún derecho específico sobre el que necesites más información?';
    }
    else if (userMessage.toLowerCase().includes('carta de presentación')) {
      botResponse = 'Una buena carta de presentación debe destacar tus fortalezas y cómo estas beneficiarán a la empresa. Si tienes alguna discapacidad, puedes elegir mencionarla explicando cómo has superado desafíos y desarrollado habilidades valiosas gracias a ella. ¿Quieres que te ayude a estructurar tu carta de presentación?';
    }
    else {
      botResponse = 'Gracias por tu mensaje. Estoy aquí para ayudarte con todo lo relacionado a empleo inclusivo, creación de hojas de vida, y orientación laboral para personas con discapacidad. ¿Podrías ser más específico sobre lo que necesitas?';
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 2,
        sender: 'bot',
        content: botResponse,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500); // Simular tiempo de respuesta
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Agregar mensaje del usuario
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    
    // Simular respuesta del bot
    simulateResponse(inputMessage);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Agregar la sugerencia como mensaje del usuario
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: suggestion,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simular respuesta del bot
    simulateResponse(suggestion);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto pt-20 pb-4 px-4 flex flex-col h-screen">
        <div className="flex-1 bg-white rounded-t-lg shadow-md overflow-hidden flex flex-col">
          {/* Cabecera del chat */}
          <div className="bg-gradient-to-r from-azulmio to-moradomio text-white p-4 flex items-center">
            <div className="flex items-center">
              <img src={darkMode ? "/inklurosa.png" : "/inklufnd.png"} alt="Inklú Avatar" className="h-10 w-10 rounded-full bg-white p-1 mr-3" />
              <div>
                <h2 className="font-bold">Inklú-IA</h2>
                <p className="text-xs opacity-80">Asistente virtual</p>
              </div>
            </div>
          </div>
          
          {/* Cuerpo del chat */}
          <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            {/* Mostrar sugerencias iniciales */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 my-4">
                {sugerencias.map((sugerencia, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(sugerencia)}
                    className={`${
                      darkMode 
                        ? 'bg-gray-700 text-blue-300 border border-blue-500 hover:bg-blue-800' 
                        : 'bg-white text-azulmio border border-azulmio hover:bg-azulmio hover:text-white'
                    } rounded-full px-4 py-2 text-sm transition-colors`}
                  >
                    {sugerencia}
                  </button>
                ))}
              </div>
            )}
            
            {/* Mensajes */}
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-moradomio text-white rounded-tr-none' 
                        : darkMode 
                          ? 'bg-gray-700 text-white border border-gray-600 rounded-tl-none' 
                          : 'bg-white border border-gray-200 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className={`text-xs mt-1 block ${
                      message.sender === 'user' 
                        ? 'text-purple-200' 
                        : darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Indicador de "escribiendo..." */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`${
                    darkMode 
                      ? 'bg-gray-700 border border-gray-600' 
                      : 'bg-white border border-gray-200'
                  } rounded-lg rounded-tl-none p-3 max-w-[70%]`}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Entrada de mensaje */}
          <div className={`border-t ${
            darkMode 
              ? 'border-gray-700 bg-gray-800' 
              : 'border-gray-200 bg-white'
          } p-3`}>
            <div className="flex items-center space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje aquí..."
                className={`flex-1 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-800'
                } border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-moradomio resize-none max-h-32`}
                rows="1"
              />
              <button 
                onClick={handleSendMessage}
                className="bg-moradomio text-white p-3 rounded-full hover:bg-azulmio transition-colors"
                disabled={inputMessage.trim() === ''}
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1 text-center`}>
              Inklú-IA está diseñada para ayudarte a crear tu CV
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat; 