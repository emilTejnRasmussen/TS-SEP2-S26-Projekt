import "./LogoutButton.css"
import { FaPersonWalking } from "react-icons/fa6";

export function LogoutButton({onLogout, isDesktop, isOpen}) {

    const handleLogout = () => {
        localStorage.removeItem("userDetails")
        onLogout()
    }

    return (
        <div className="button-wrapper">
            <span className="vertical-span"/>
            <button
                className={isOpen ? "logout-button" : "logout-button collapsed"}
            onClick={handleLogout}
            >
                {isOpen &&
                    "Logout"
                }

                {isDesktop && !isOpen &&
                    <FaPersonWalking size={24}/>
                }
            </button>
        </div>
    )
}