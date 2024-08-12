import Router from "./header-component/Router";
import Logo from "./header-component/Logo";
import Name from "./header-component/Name";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Logo />
          <Name />
        </div>
        <Router />
      </div>
    </>
  );
}

export default Header;
