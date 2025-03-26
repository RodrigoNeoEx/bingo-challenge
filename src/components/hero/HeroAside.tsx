// Container pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.

const HeroAside = ({children}: any) => {
  return (
    <div className="flex-col justify-items-center items-center mt-5 ">
      {children}
    </div>
  );
};

export default HeroAside;