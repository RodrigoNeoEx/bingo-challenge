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
        ? <div className='leading-5'>🌙<br/>Tema Escuro</div> 
        : <div className='leading-5'>☀️<br/>Tema Claro</div>
      }
      
    </button>
  );
};

export default ThemeToggle;
