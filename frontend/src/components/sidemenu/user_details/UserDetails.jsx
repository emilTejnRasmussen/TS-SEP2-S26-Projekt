import {FaUser} from "react-icons/fa";
import "./UserDetails.css"

export function UserDetails({username}) {
    return(
        <div className="user-details-wrapper">
            <FaUser size={24}/>

            Hi, {username}
        </div>
    )
}