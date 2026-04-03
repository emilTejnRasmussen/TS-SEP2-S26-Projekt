import {FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";

export function BurgerButton({isOpen, toggleMenu}) {
    return(
        <div
        onClick={toggleMenu}
        >
            {isOpen ?
                <FaXmark size={24} />
                :
                <FaBars size={24} />

            }
        </div>
    )
}