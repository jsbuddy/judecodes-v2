import Logo from "./Logo.jsx";
import ThemeSwitcher from "./ThemeSwitcher";
import ClientOnly from "./ClientOnly";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container h-[100px] md:h-[140px] flex items-center space-x-4 md:space-x-6">
        <ClientOnly>
          <Logo className="rotate-6"/>
          <ThemeSwitcher/>
        </ClientOnly>
      </div>
    </nav>
  );
};

export default Navbar;
