import './App.css'
import "./styles.css"
import {MobileMenu} from "./components/sidemenu/mobile_menu/MobileMenu.jsx";
import {DesktopMenu} from "./components/sidemenu/desktop_menu/DesktopMenu.jsx";
import {useEffect, useState} from "react";

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={isMobile ? "mobile-layout" : "desktop-layout"}>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  )
}

export default App
