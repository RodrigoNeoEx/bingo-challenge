const Header = ({children}:any) => {
  return (
    <header className="h-20 bg-blue-400 text-white text-center flex items-center justify-center">
      {children}
    </header>
  );
}

export default Header;