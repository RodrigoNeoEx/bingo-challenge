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