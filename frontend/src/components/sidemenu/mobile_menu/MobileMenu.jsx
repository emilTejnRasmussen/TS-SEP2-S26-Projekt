import {BurgerButton} from "../burger_button/BurgerButton.jsx";
import {useState} from "react";
import {LoginMenu} from "../login_menu/LoginMenu.jsx";

import "./MobileMenu.css"
import {UserDetails} from "../user_details/UserDetails.jsx";

export function MobileMenu({openLoginModal, openRegisterModal}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
                />
            }
        </div>
    )
}