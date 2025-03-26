// Container pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.

import React, { ReactNode } from 'react';

interface HeroAsideProps {
  children: ReactNode; 
}

const HeroAside: React.FC<HeroAsideProps> = ({ children }) => {
  return (
    <aside className="flex-col justify-items-center items-center mt-5">
      {children}
    </aside>
  );
};

export default HeroAside;