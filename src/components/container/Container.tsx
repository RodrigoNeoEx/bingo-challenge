// Container pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.

const Container = ({children}: any) => {
  return (
    <div className="bg-blue-100 dark:bg-[#00449f] text-white text-center w-full h-screen">
      {children}
    </div>
  );
}

export default Container;