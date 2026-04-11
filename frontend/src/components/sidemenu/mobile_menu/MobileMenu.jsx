import "./MobileMenu.css"
import {useState} from "react";

import {LoginMenu} from "../login_menu/LoginMenu.jsx";
import {BurgerButton} from "../burger_button/BurgerButton.jsx";
import {UserDetails} from "../user_details/UserDetails.jsx";
import {LogoutButton} from "../logout_button/LogoutButton.jsx";

export function MobileMenu({openLoginModal, openRegisterModal, isLoggedIn, checkLoginStatus}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`menu-wrapper ${isOpen && "menu-wrapper-open"}`}>
            <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu}/>

            {isOpen && isLoggedIn &&
                <UserDetails username={"username"} />
            }

            {isOpen && !isLoggedIn &&
                <LoginMenu
                    toggleMenu={toggleMenu}
                    onOpenLoginModal={openLoginModal}
                    onOpenRegisterModal={openRegisterModal}
                    onLogin={checkLoginStatus}
                />
            }

            {isOpen && isLoggedIn &&
                <LogoutButton
                    onLogout={checkLoginStatus}
                    isOpen={true}
                    isDesktop={false}
                />
            }
        </div>
    )
}