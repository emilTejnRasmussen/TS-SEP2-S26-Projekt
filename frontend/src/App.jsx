import './App.css'
import "./styles.css"
import { MobileMenu } from "./components/sidemenu/mobile_menu/MobileMenu.jsx";
import { DesktopMenu } from "./components/sidemenu/desktop_menu/DesktopMenu.jsx";
import { useEffect, useState } from "react";
import { PopupModal } from "./components/popup/PopupModal.jsx";

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showPopup, setShowPopup] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className={isMobile ? "mobile-layout" : "desktop-layout"}>
                {isMobile ? (
                    <MobileMenu
                        openLoginModal={() => {
                            setIsLoginModalOpen(true);
                            setShowPopup(true);
                        }}
                        openRegisterModal={() => {
                            setIsLoginModalOpen(false);
                            setShowPopup(true);
                        }}
                    />
                ) : (
                    <DesktopMenu />
                )}
            </div>

            <PopupModal
                isOpen={showPopup}
                isLogin={isLoginModalOpen}
                setIsLogin={setIsLoginModalOpen}
                onClose={() => setShowPopup(false)}
            />
        </>
    );
}

export default App;