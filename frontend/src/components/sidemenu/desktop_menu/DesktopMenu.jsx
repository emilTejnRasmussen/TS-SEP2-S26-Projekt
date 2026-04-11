import {useState} from "react";
import "./DesktopMenu.css"
import {UserDetails} from "../user_details/UserDetails.jsx";
import {LoginMenu} from "../login_menu/LoginMenu.jsx";
import {LogoutButton} from "../logout_button/LogoutButton.jsx";

export function DesktopMenu({openLoginModal, openRegisterModal, isLoggedIn, checkLoginStatus}) {
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

            {isLoggedIn &&
                <LogoutButton
                    onLogout={checkLoginStatus}
                    isOpen={isMenuOpened}
                    isDesktop={true}
                />
            }
        </div>
    )
}