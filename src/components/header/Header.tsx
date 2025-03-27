// Header pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.
// O componente Header é um container para o conteúdo do cabeçalho da aplicação.

import React, { ReactNode } from 'react';
import ThemeToggle from "../themeToggle/ThemeToggle";

interface HeaderProps {
  children: ReactNode; 
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="h-20  text-black text-center flex items-center justify-center  dark:text-gray-100 bg-light dark:bg-dark shadow-inset-blue">
      {children}
      <ThemeToggle />
    </header>
  );
}

export default Header;