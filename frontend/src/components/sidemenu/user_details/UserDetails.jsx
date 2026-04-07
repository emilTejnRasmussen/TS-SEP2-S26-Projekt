import {FaUser} from "react-icons/fa";
import "./UserDetails.css"

export function UserDetails({username, isMenuOpened = true}) {
    return(
        <div className="user-details-wrapper">
            <div className="icon-wrapper">
            <FaUser size={24}/>
            </div>

            {isMenuOpened ? `Hi, ${username}` : ""}


        </div>
    )
}