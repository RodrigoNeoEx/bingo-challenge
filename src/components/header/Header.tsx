// Header pronto para utilizar outros componentes internamente no componente ou via children em caso de necessidade de customização.
// O componente Header é um container para o conteúdo do cabeçalho da aplicação.

import ThemeToggle from "../themeToggle/ThemeToggle";

const Header = ({children}:any) => {
  return (
    <header className="h-20  text-black text-center flex items-center justify-center  dark:text-gray-100 bg-light dark:bg-dark">
      {children}
      <ThemeToggle />
    </header>
  );
}

export default Header;