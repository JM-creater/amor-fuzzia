import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HomePage } from "./screens/home-screen/home-screen";
import { BouquetScreen } from "./screens/bouquet-screen/bouquet-screen";
import { Navbar } from "./components/nav-bar/nav-bar";
import { ContactsScreen } from "./screens/contacts-screen/contacts-screen";
import { AboutScreen } from "./screens/about-screen/about-screen";
import { FindUsScreen } from "./screens/find-us-screen/find-us-screen";
import { AMOR_FUZZIA, HOME_PAGE, NOT_NAVBAR_HOME } from "./constants/constants";
import "./App.css";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === HOME_PAGE;

  useEffect(() => {
    const titles = NOT_NAVBAR_HOME;
    document.title = titles[location.pathname] || AMOR_FUZZIA;
  }, [location.pathname]);

  return (
    <>
      {!isHomePage && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/bouquet" element={<BouquetScreen />} />
          <Route path="/contacts" element={<ContactsScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/find-us" element={<FindUsScreen />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
