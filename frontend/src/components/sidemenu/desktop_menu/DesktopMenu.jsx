import {useState} from "react";
import "./DesktopMenu.css"
import {UserDetails} from "../user_details/UserDetails.jsx";
import {LoginMenu} from "../login_menu/LoginMenu.jsx";

export function DesktopMenu() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div className="desktop-menu-wrapper"
        onMouseEnter={() => setIsMenuOpened(true)}
        onMouseLeave={() => setIsMenuOpened(false)}>
            {isLoggedIn &&
                <UserDetails username={"username"} isMenuOpened={isMenuOpened}/>
            }

            {!isLoggedIn && isMenuOpened &&
                <LoginMenu />
            }
        </div>
    )
}