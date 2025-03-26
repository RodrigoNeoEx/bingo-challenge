// Utilizado local storage por ser uma aplicação para teste tecnico e não ter necessidade de persistir o tema em outros dispositivos.
// O tema é alternado entre claro e escuro, e o estado é salvo no local storage para persistir entre recarregamentos da página.
// Não foi utilizado o Context API para gerenciar o tema, pois a aplicação é CSR (Client-Side Rendering) e SPA (Single Page Application).
// Como o estado do tema é local e pode ser alternado diretamente no cliente, não há necessidade de um provider global ou context para compartilhar esse estado entre componentes.


import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verificar a preferência de tema ao carregar a página
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Alternar entre os temas claro e escuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-900 dark:text-white font-bold w-1/5"
    >
      {isDarkMode 
        ? <span className='leading-5'>🌙<br/>Tema Escuro</span> 
        : <span className='leading-5'>☀️<br/>Tema Claro</span>
      }
      
    </button>
  );
};

export default ThemeToggle;
