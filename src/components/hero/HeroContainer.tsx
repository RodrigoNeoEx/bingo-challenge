// Container pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.

import React, { ReactNode } from 'react';

interface HeroContainerProps {
  children: ReactNode; 
}

const HeroContainer: React.FC<HeroContainerProps> = ({ children }) => {
  return (
    <section className='text-white text-center p-4 grid md:grid-cols-2 xl:justify-self-center'>
      {children}
    </section>
  )
}

export default HeroContainer;