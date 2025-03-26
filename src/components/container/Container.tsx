// Container pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.

import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; 
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="bg-blue-100 dark:bg-[#00449f] text-white text-center w-full h-screen">
      {children}
    </div>
  );
}

export default Container;