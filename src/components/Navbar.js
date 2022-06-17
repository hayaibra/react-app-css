import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);
  const [active, setActive] = React.useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const show = () => {
    if (window.innerWidth <= 991) {
      setActive(true);
      setButton(false);
    } else {
      setActive(false);
      setButton(true);
    }
  };

  React.useEffect(() => {
    show();
  }, []);

  window.addEventListener("resize", show);

  let classMenu;
  if (active) {
    classMenu = "nav-menu-mobile";
    if (click) {
      classMenu = "nav-menu-mobile active";
    }
  } else {
    classMenu = "nav-menu";
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fa-brands fa-typo3" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>
          <ul className={classMenu}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
