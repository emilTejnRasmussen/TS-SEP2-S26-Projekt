import {useState} from "react";
import "./DesktopMenu.css"
import {UserDetails} from "../user_details/UserDetails.jsx";
import {LoginMenu} from "../login_menu/LoginMenu.jsx";

export function DesktopMenu() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div className="desktop-menu-wrapper">
            {isLoggedIn &&
                <UserDetails username={"username"}/>
            }

            {!isLoggedIn &&
                <LoginMenu />
            }
        </div>
    )
}