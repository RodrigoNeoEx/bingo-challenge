// Container pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.

import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; 
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <section className="bg-light2 dark:bg-dark2 text-white text-center w-full h-screen overflow-y-auto">
      {children}
    </section>
  );
}

export default Container;