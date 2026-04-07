import {useState} from "react";
import "./DesktopMenu.css"
import {UserDetails} from "../user_details/UserDetails.jsx";
import {LoginMenu} from "../login_menu/LoginMenu.jsx";

export function DesktopMenu({openLoginModal, openRegisterModal}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false  )
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    return (
        <div className="desktop-menu-wrapper"
        onMouseEnter={() => setIsMenuOpened(true)}
        onMouseLeave={() => setIsMenuOpened(false)}>
            {isLoggedIn &&
                <UserDetails username={"username"} isMenuOpened={isMenuOpened}/>
            }

            {!isLoggedIn && isMenuOpened &&
                <LoginMenu
                    onOpenLoginModal={openLoginModal}
                    onOpenRegisterModal={openRegisterModal}
                />
            }
        </div>
    )
}