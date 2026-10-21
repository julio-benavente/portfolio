import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background">
      <div className="container-narrow flex items-center justify-between py-3">
        <NavLinks />
        {/* The button is 40px wide with a 14px icon, so pull it right by the 13px of inner padding to align the icon with the column edge */}
        <div className="-mr-[13px]">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
