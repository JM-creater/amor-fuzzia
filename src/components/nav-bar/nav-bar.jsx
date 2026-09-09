import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MOBILE_NAV_LINKS, NAV_LINKS } from "../../constants/constants";
import { drawerVariants, menuItemVariants, menuListVariants } from "../../functions/functions";
import logo from "../nav-bar/assets/AMor-Fuzzia-Logo.png";
import "./styles/nav-bar-styles.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [prevPathName, setPrevPathName] = useState(location.pathname);

  const changeNameTitle = useCallback(() => {
    let titleName;
    if (location.pathname === "/contacts") {
      titleName = "Contacts"
      document.title = `AMor Fuzzia - ${titleName}`
    } else if (location.pathname === "/about") {
      titleName = "About"
      document.title = `AMor Fuzzia - ${titleName}`
    } else if (location.pathname === "/bouquet") {
      titleName = "Bouquet"
      document.title = `AMor Fuzzia - ${titleName}`
    } else if (location.pathname === "/find-us") {
      titleName = "Find Us"
      document.title = `AMor Fuzzia - ${titleName}`
    } else {
      titleName = "Home"
      document.title = `AMor Fuzzia - ${titleName}`
    }
    return titleName;
  }, [location.pathname]);

  useEffect(() => {
    changeNameTitle();
  }, [changeNameTitle]);

  if (location.pathname !== prevPathName) {
    setPrevPathName(location.pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar-container" aria-label="Main Navigation">
        <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="AMor Fuzzia" className="navbar-logo" />
          <span className="navbar-title">AMor Fuzzia</span>
        </Link>

        <ul className="navbar-links navbar-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `navbar-desktop-link ${isActive ? "navbar-desktop-link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`navbar-burger-btn ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="navbar-mobile-drawer"
        >
          <span className="burger-line burger-line--top" />
          <span className="burger-line burger-line--mid" />
          <span className="burger-line burger-line--bot" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="navbar-backdrop"
              className="navbar-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.aside
              key="navbar-drawer"
              id="navbar-mobile-drawer"
              className="navbar-mobile-drawer"
              aria-label="Mobile Navigation"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="navbar-mobile-header">
                <Link
                  to="/"
                  className="navbar-mobile-brand"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={logo}
                    alt="AMor Fuzzia"
                    className="navbar-mobile-logo"
                  />
                  <div className="navbar-mobile-brand-info">
                    <span className="navbar-mobile-title">AMor Fuzzia</span>
                    <span className="navbar-mobile-tagline">
                      Handmade Fuzzy Bouquets 🌸
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="navbar-mobile-close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <motion.ul
                className="navbar-mobile-links"
                variants={menuListVariants}
                initial="hidden"
                animate="visible"
              >
                {MOBILE_NAV_LINKS.map((link) => (
                  <motion.li key={link.label} variants={menuItemVariants}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `navbar-mobile-link ${isActive ? "navbar-mobile-link--active" : ""
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="navbar-mobile-link-text">
                        {link.label}
                      </span>
                      <svg
                        className="navbar-mobile-arrow"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="navbar-mobile-footer">
                <Link
                  to="/bouquet"
                  className="navbar-mobile-cta"
                  onClick={() => setIsOpen(false)}
                >
                  ✨ Explore Bouquets
                </Link>
                <p className="navbar-mobile-note">
                  Crafted with love for every special occasion
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

