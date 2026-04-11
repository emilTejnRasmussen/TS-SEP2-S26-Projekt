import {FaUser} from "react-icons/fa";
import "./UserDetails.css"

export function UserDetails({isMenuOpened = true}) {

    function getUsername() {
        let userDetails = JSON.parse(localStorage.getItem("userDetails"))
        if (userDetails == null) return ""
        return userDetails.username
    }

    return(
        <div className="user-details-wrapper">
            <div className="icon-wrapper">
            <FaUser size={24}/>
            </div>

            {isMenuOpened ? `Hi, ${getUsername()}` : ""}


        </div>
    )
}